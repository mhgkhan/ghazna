"use client"


import React, { useState } from 'react'
import FormsButton from '@/components/ui/buttonsandlinks/FormsButton'
import { FaHtml5, FaPlus, FaPlusCircle, FaRepublican, FaTablet } from 'react-icons/fa'
import { CgClose } from 'react-icons/cg'
import BlogPostHeader from '../BlogPostHeader'
import BlogPostContent from '../BlogPostContent'
import SmallLoading from '../../SmallLoading'
import RespMessage from '../../dailogs/RespMessage'


const BlogForm = () => {



    const [imgLink, setImgLink] = useState("");
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("general");
    const [tags, setTags] = useState("");


    const [dailog, setDailog] = useState({
        heading: false,
        paragraph: false,
        image: false,
        others: false,
        title: ""
    })
    const [openedDailog, setOpenedDailog] = useState(false);





    const openHeadingBox = () => {
        setDailog({ ...dailog, heading: true, title: "Heading" })
        setOpenedDailog(true);

    }
    const openParagraphBox = () => {
        setDailog({ ...dailog, paragraph: true, title: "Paragraph" })
        setOpenedDailog(true);
    }
    const openImageBox = () => {
        setDailog({ ...dailog, image: true, title: "Image" })
        setOpenedDailog(true);
    }
    const openOthersBox = () => {
        setDailog({ ...dailog, others: true, title: "Others" })
        setOpenedDailog(true);
    }


    const addHeading = () => { }
    const addParagraph = () => { }
    const addImage = () => { }
    const addOthers = () => { }
    const addContent = () => { }


    const [activeRawHtml, setActiveRawHtml] = useState(false);



    const [finalHtml, setFinalHtml] = useState([]);
    const [typingHtml, setTypingHtml] = useState("");
    const [typingTitle, setTypingTitle] = useState("");
    const [typingCss, setTypingCss] = useState("");
    const [typingAttributes, setTypingAttributes] = useState("")
    const [currentTag, setCurrentTag] = useState("");



    const changeDailogtype = (e) => {
        // setTypingHtml(`<${e.target.value} style="${typingCss}" > ${typingTitle}  </${e.target.value}>`);
        setCurrentTag(e.target.value);
    }



    const [theTags, setTheTags] = useState({
        heading: ["h1", "h2", "h3", "h4", "h5", "h6"],
        paragraph: ["p", "span", "div"],
        image: ["img", "figure", "figcaption"],
        others: ["blockquote", "code", "pre", "ul", "ol", "li", "table", "tr", "td", "th", "thead", "tbody", "tfoot", "a", "link", "script", "style"]
    });




    const clickToSave = () => {
        finalHtml.push(`<${currentTag} ${typingAttributes}  style="${typingCss}">${typingTitle}</${currentTag}>`);
        setFinalHtml([...finalHtml]);
        setTypingHtml("");
        setTypingTitle("");
        setTypingCss("");
        setOpenedDailog(false);
    }


    const [openedPreview, setOpenedPreview] = useState(false);
    const openPreview = () => {
        setOpenedPreview(!openedPreview);
    }

    const [openedHtml, setOpenedHtml] = useState(false);
    const openHtml = () => {
        setOpenedHtml(!openedHtml);
    }



    const [loading, setLoading] = useState(false);
    const [isErr, setIsErr] = useState(false);
    const [resMessage, setResMessage] = useState("");


    const submitBlogPost = async e => {
        e.preventDefault();

        if (!imgLink || !title || !description || !category || !tags) {
            setIsErr(true);
            setResMessage("Please fill all the fields");
            return;
        }

        setIsErr(false);
        setLoading(true);

        try {

            const response = await fetch("/api/blogs/create", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    title,
                    description,
                    category,
                    tags: tags,
                    image: imgLink,
                    content: activeRawHtml ? rawHtml : finalHtml.join("").toString()
                })
            });

            const data = await response.json();
            console.log(data);


            if (data.success) {
                setResMessage("Blog post created successfully");
                setIsErr(false);
                // Reset the form
                setImgLink("");
                setTitle("");
                setDescription("");
                setCategory("general");
                setTags("");
                setFinalHtml([]);

                window.location.href = `/blog/${data.data.slug}`; // Redirect to the newly created blog post
            } else {
                setIsErr(true);
                setResMessage(data.message || "Failed to create blog post");
            }




        } catch (error) {
            setIsErr(true);
            setResMessage("Something went wrong, please try again later");
            // console.error("Error submitting blog post:", error);

        } finally {
            setLoading(false);
        }




    }

    const [rawHtml, setRawHtml] = useState("");


    return (
        <div className="blog-form relative">
            <div className="blog-form-start my-5 md:px-1 px-2 relative w-full h-full">


                {/* blog image  */}
                <div className="blog-image-inp w-full">
                    {/* <label htmlFor="blog-image-url">Blog Image Url</label> */}
                    <input onChange={(e) => setImgLink(e.target.value)} value={imgLink} type="text" name="url" autoComplete='off' placeholder="Enter Blog Image URL" className="my-3 italic dark:text-white text-black dark:focus:bg-gray-700 focus:bg-gray-100 rounded-md py-3 px-2 w-full outline-none border border-2   border-gray-400 focus:border-dotted dark:focus:border-white focus:border-gray-800  bg-inherit disabled:bg-gray-300 disabled:text-gray-400" />
                </div>


                {/* // blog title  */}
                <div className="blog-title-inp w-full">
                    {/* <label htmlFor="blog-image-url">Blog Title </label> */}
                    <input onChange={(e) => setTitle(e.target.value)} value={title} type="text" name="title" autoComplete='off' placeholder="Blog Title" className="my-3 dark:text-white md:text-2xl text-xl text-black font-bold dark:focus:bg-gray-700 focus:bg-gray-100 rounded-md py-3 px-2 w-full outline-none border border-2  border-gray-400 focus:border-dotted dark:focus:border-white focus:border-gray-800  bg-inherit disabled:bg-gray-300 disabled:text-gray-400" />
                </div>

                {/* blog description  */}
                <div className="blog-image-inp w-full">
                    {/* <label htmlFor="blog-image-url">Blog Image Url</label> */}
                    <textarea onChange={(e) => setDescription(e.target.value)} value={description} rows={5} name="description" autoComplete='off' placeholder="Type your blog description here" className="my-3   dark:text-white text-black dark:focus:bg-gray-700 focus:bg-gray-100 rounded-md py-3 px-2 w-full outline-none border border-2  border-gray-400 focus:border-dotted dark:focus:border-white focus:border-gray-800  bg-inherit disabled:bg-gray-300 disabled:text-gray-400" />
                </div>


                {/* blog category and tags */}
                <div className="blog-category-tags flex md:flex-row flex-col items-center justify-center gap-5">

                    <div className='md:w-[50%] w-full'>
                        <select name="category" onChange={e => setCategory(e.target.value)} value={category} className="my-3 font-bold dark:text-white text-black dark:focus:bg-gray-700 focus:bg-gray-100 rounded-md py-3 px-2 w-full outline-none border border-2   border-gray-400 focus:border-dotted dark:focus:border-white focus:border-gray-800  bg-inherit disabled:bg-gray-300 disabled:text-gray-400">
                            <option defaultChecked value={"general"} disabled selected>Select your category</option>
                            {
                                Array.from(["Technology", "Health", "Lifestyle", "Travel", "Food", "Education", "Business", "Entertainment",
                                    "Sports", "Fashion", "Finance", "Science", "Art", "Music", "Photography", "Government", "Jobs",
                                    "Gaming", "Environment", "Politics", "Parenting", "History", "DIY", "Automotive", "Spirituality",
                                    "Real Estate", "Marketing", "Personal Development", "Startups", "Books", "Culture", "Economy",
                                    "Medicine", "Fitness", "Mental Health", "Nature", "News", "Crypto", "Investing", "Relationships",
                                    "Animals", "Crafts", "Design", "Architecture", "Interior Design", "Space", "Programming", "Movies",
                                    "TV Shows", "Mobile", "Gadgets", "E-commerce", "Social Media", "Legal", "Career Advice", "Productivity",
                                    "Sustainability", "Weddings", "Pet Care", "Language Learning", "Comics", "Luxury", "Adventure",
                                    "Mythology", "Podcasts", "UX/UI", "Blockchain", "Volunteering", "Leadership"]).map((category, index) => {
                                        return (
                                            <option className='p-1' key={index} value={category.toLowerCase()}>{category}</option>
                                        )
                                    })
                            }
                        </select>
                    </div>


                    <div className='md:w-[50%] w-full'>
                        <input onChange={(e) => setTags(e.target.value)} value={tags} type="text" name="tags" autoComplete='off' placeholder="Enter your tags with space" className="my-3 font-bold dark:text-white text-black dark:focus:bg-gray-700 focus:bg-gray-100 rounded-md py-3 px-2 w-full outline-none border border-2   border-gray-400 focus:border-dotted dark:focus:border-white focus:border-gray-800  bg-inherit disabled:bg-gray-300 disabled:text-gray-400" />
                    </div>


                </div>




                {/* blog content  */}

                <div className="blog-content-inp w-full">
                    <h2 className='text-2xl font-bold my-3'>Blog Content</h2>
                    {/* action buttons  */}
                    <div className="blog-content-actions-container flex items-center justify-between my-3 gap-5 flex-wrap">

                        <div className="flex items-center justify-start gap-3 flex-wrap">



                            <button disabled={activeRawHtml} onClick={openHeadingBox} className='flex items-center justify-center gap-3 rounded-md border-2 border-gray-400 dark:border-white p-2 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 cursor-pointer'>
                                <FaPlusCircle className='dark:text-white text-gray-800 font-bold text-xl mx-1' />
                                Heading
                            </button>

                            <button disabled={activeRawHtml} onClick={openParagraphBox} className='flex items-center justify-center gap-3 rounded-md border-2 border-gray-400 dark:border-white p-2 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 cursor-pointer'>
                                <FaPlusCircle className='dark:text-white text-gray-800 font-bold text-xl mx-1' />
                                Paragraph
                            </button>

                            <button disabled={activeRawHtml} onClick={openImageBox} className='flex items-center justify-center gap-3 rounded-md border-2 border-gray-400 dark:border-white p-2 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 cursor-pointer'>
                                <FaPlusCircle className='dark:text-white text-gray-800 font-bold text-xl mx-1' />
                                Image
                            </button>

                            <button disabled={activeRawHtml} onClick={openOthersBox} className='flex items-center justify-center gap-3 rounded-md border-2 border-gray-400 dark:border-white p-2 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 cursor-pointer'>
                                <FaPlusCircle className='dark:text-white text-gray-800 font-bold text-xl mx-1' />
                                Others
                            </button>
                        </div>

                        <div onClick={() => { setActiveRawHtml(!activeRawHtml) }} className={`flex items-center justify-center gap-3 rounded-md border-2 border-gray-400 dark:border-white p-2  ${activeRawHtml ? "bg-red-500" : "bg-gray-100"} bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 cursor-pointer`}>
                            {
                                activeRawHtml ? <CgClose className='dark:text-white text-gray-800 font-bold text-xl mx-1' /> : <FaHtml5 className='dark:text-white text-gray-800 font-bold text-xl mx-1' />
                            }
                            {
                                activeRawHtml ? "Disable Raw HTML" : "Enable Raw HTML"

                            }
                        </div>
                    </div>



                    {
                        openedDailog ? <div className="dailog">


                            <h3 className="text-2xl font-bold my-0 mt-5">Add {dailog.title} </h3>
                            <div className="flex items-center justify-between my-3 gap-5">

                                <div className="w-[50%]">
                                    <select disabled={activeRawHtml} onChange={changeDailogtype} defaultValue={theTags[dailog.title.toLowerCase()][0]} name="blog-content-type" className="my-3 font-bold dark:text-white text-black dark:focus:bg-gray-700 focus:bg-gray-100 rounded-md py-3 px-2 w-full outline-none border border-2   border-gray-400 focus:border-dotted dark:focus:border-white focus:border-gray-800  bg-inherit disabled:bg-gray-300 disabled:text-gray-400">
                                        <option defaultChecked value={theTags[dailog.title.toLowerCase()][0]} disabled selected>Select Tag </option>                                        {
                                            Array.from(theTags[dailog.title.toLowerCase()]).map((tag, index) => {
                                                return (
                                                    <option key={index} value={tag}>{tag}</option>
                                                )
                                            })
                                        }
                                    </select>
                                </div>

                                <div className="w-[50%]">

                                    <input disabled={activeRawHtml} type="text" onChange={e => setTypingTitle(e.target.value)} name="heading-text" autoComplete='off' placeholder="Enter your heading text" className="my-3 font-bold dark:text-white text-black dark:focus:bg-gray-700 focus:bg-gray-100 rounded-md py-3 px-2 w-full outline-none border border-2   border-gray-400 focus:border-dotted dark:focus:border-white focus:border-gray-800  bg-inherit disabled:bg-gray-300 disabled:text-gray-400" />
                                </div>

                            </div>
                            <div>
                                <div className="flex items-center justify-center md:flex-row flex-col gap-5">
                                    <textarea disabled={activeRawHtml} onChange={e => setTypingAttributes(e.target.value)} rows={8} name="attributes" autoComplete='off' placeholder=" Add your recommended attributes for the selected tag, line by line, eg:  align='center'
                    
                    " className="my-3 font-bold dark:text-white text-black dark:focus:bg-gray-700 focus:bg-gray-100 rounded-md py-3 px-2 w-full outline-none border border-2   border-gray-400 focus:border-dotted dark:focus:border-white focus:border-gray-800  bg-inherit disabled:bg-gray-300 disabled:text-gray-400" />
                                    <textarea disabled={activeRawHtml} onChange={e => setTypingCss(e.target.value)} rows={8} name="css classes" autoComplete='off' placeholder="Type Css eg 
                    color:white;
                    font-size: 20px;
                    
                    " className="my-3 font-bold dark:text-white text-black dark:focus:bg-gray-700 focus:bg-gray-100 rounded-md py-3 px-2 w-full outline-none border border-2   border-gray-400 focus:border-dotted dark:focus:border-white focus:border-gray-800  bg-inherit disabled:bg-gray-300 disabled:text-gray-400" />

                                </div>
                            </div>

                            <FormsButton type={"button"} loading={false} text={"Add"} clickFun={clickToSave} />
                        </div> : ""
                    }
                    {
                        activeRawHtml ? <div className="raw-html-input my-5">
                            <textarea disabled={loading} onChange={e => setRawHtml(e.target.value)} rows={8} name="attributes" autoComplete='off' placeholder=" Add your recommended attributes for the selected tag, line by line, eg:  align='center'
                    
                    " className="my-3 font-bold dark:text-white text-black dark:focus:bg-gray-700 focus:bg-gray-100 rounded-md py-3 px-2 w-full outline-none border border-2   border-gray-400 focus:border-dotted dark:focus:border-white focus:border-gray-800  bg-inherit disabled:bg-gray-300 disabled:text-gray-400" />
                        </div> : ""
                    }


                    <div className="preview mt-10 ">
                        <h2 className='text-2xl font-bold my-5'>Your Blog Preview </h2>
                        <div className="preview-main my-10 md:w-[80%] mx-auto border border-1 border-white rounded-md">


                            {
                                finalHtml.map((content, index) => {
                                    return <div dangerouslySetInnerHTML={{ __html: content }} key={index} className="blog-content-preview"></div>;
                                })
                            }



                        </div>

                    </div>

                    <div className="submit-buttons flex md:flex-row flex-col items-center gap-5 my-10">
                        <FormsButton type={"button"} loading={loading} text={"Publish Blogpost "} icon={<FaRepublican />} clickFun={submitBlogPost} />
                        {
                            openedPreview ? <FormsButton type={"button"} loading={false} text={"Close Preview "} icon={<CgClose />} clickFun={() => setOpenedPreview(false)} /> : <FormsButton type={"button"} loading={false} text={"Preview Blogpost "} icon={<FaTablet />} clickFun={() => setOpenedPreview(true)} />
                        }
                        {
                            openedHtml ? <FormsButton type={"button"} loading={false} text={"Close HTML Preview "} icon={<CgClose />} clickFun={() => setOpenedHtml(false)} /> : <FormsButton type={"button"} loading={false} text={"View HTML "} icon={<FaHtml5 />} clickFun={() => setOpenedHtml(true)} />

                        }
                    </div>

                    {
                        loading ? <SmallLoading /> : ""
                    }
                    {
                        resMessage.length > 0 ? <RespMessage isErr={isErr} message={resMessage} hide={() => {
                            setResMessage("");
                            setIsErr(false)
                        }} /> : ""
                    }


                </div>

            </div>









            {/* preview part  */}



            {
                openedPreview ? <div className={`preview-dailog ${openedPreview ? 'absolute inset-1' : ""} dark:bg-gray-800 bg-gray-200`}>
                    {/* Preview the Upper Blogpost */}
                    <div className={`preview-area relative border-2 border-white rounded-md p-5 ${openedPreview ? "block" : "hidden"}`}>
                        <h2 className='text-2xl font-bold my-5'>Your Blog Preview </h2>
                        <div className="absolute top-5 right-5 p-3 rounded-md bg-red-600 text-white font-bold text-xl cursor-pointer" onClick={() => setOpenedPreview(false)}><CgClose /></div>

                        <BlogPostHeader title={title} image={imgLink} views={200} description={description} />

                        <BlogPostContent body={!activeRawHtml ? finalHtml.join("").toString() : rawHtml} />

                    </div>
                </div> : ""
            }

            {
                openedHtml ? <div className={`preview-dailog ${openedHtml ? 'absolute inset-1' : ""} dark:bg-gray-800 bg-gray-200`}>
                    <div className="absolute top-5 right-5 p-3 rounded-md bg-red-600 text-white font-bold text-xl cursor-pointer" onClick={() => setOpenedHtml(false)}><CgClose /></div>
                    <h3 className='font-bold text-2xl my-5 px-3 dark:text-white text-gray-800'>Your Blogpost Generated HTML</h3>
                    <div className="html-preview-area relative border-2 dark:border-white border-gray-800 rounded-md p-5 ">
                        <pre className='dark:text-white text-gray-800 font-mono text-sm text-wrap'>
                            {finalHtml.join("\n")}
                        </pre>
                    </div>
                </div> : ""
            }


        </div>
    )
}

export default BlogForm
