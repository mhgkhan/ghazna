"use client"


import React, { useState } from 'react'
import FormsButton from '@/components/ui/buttonsandlinks/FormsButton'
import { FaPlus, FaPlusCircle } from 'react-icons/fa'


const BlogForm = () => {



    const [imgLink, setImgLink] = useState("");
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("general");
    const [tags, setTags] = useState();


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





    const [finalHtml, setFinalHtml] = useState([]);
    const [typingHtml, setTypingHtml] = useState("");
    const [typingTitle, setTypingTitle] = useState("");
    const [typingCss, setTypingCss] = useState("");
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
        finalHtml.push(`<${currentTag} style="${typingCss}">${typingTitle}</${currentTag}>`);
        setFinalHtml([...finalHtml]);
    }





    return (
        <div className="blog-form-start my-5">


            {/* blog image  */}
            <div className="blog-image-inp w-full">
                {/* <label htmlFor="blog-image-url">Blog Image Url</label> */}
                <input onChange={(e) => setImgLink(e.target.value)} value={imgLink} type="url" name="url" autoComplete='off' placeholder="Enter Blog Image URL" className="my-3 italic dark:text-white text-black dark:focus:bg-gray-700 focus:bg-gray-100 rounded-md py-3 px-2 w-full outline-none border border-2   border-gray-400 focus:border-dotted dark:focus:border-white focus:border-gray-800  bg-inherit disabled:bg-gray-300 disabled:text-gray-400" />
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
                            Array.from(["Technology", "Health", "Lifestyle", "Travel", "Food", "Education", "Business", "Entertainment", "Sports", "Fashion", "Finance", "Science", "Art", "Music", "Photography"]).map((category, index) => {
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
                <div className="flex items-center justify-start gap-3 flex-wrap">



                    <div onClick={openHeadingBox} className='flex items-center justify-center gap-3 rounded-md border-2 border-gray-400 dark:border-white p-2 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 cursor-pointer'>
                        <FaPlusCircle className='dark:text-white text-gray-800 font-bold text-xl mx-1' />
                        Heading
                    </div>

                    <div onClick={openParagraphBox} className='flex items-center justify-center gap-3 rounded-md border-2 border-gray-400 dark:border-white p-2 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 cursor-pointer'>
                        <FaPlusCircle className='dark:text-white text-gray-800 font-bold text-xl mx-1' />
                        Paragraph
                    </div>

                    <div onClick={openImageBox} className='flex items-center justify-center gap-3 rounded-md border-2 border-gray-400 dark:border-white p-2 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 cursor-pointer'>
                        <FaPlusCircle className='dark:text-white text-gray-800 font-bold text-xl mx-1' />
                        Image
                    </div>

                    <div onClick={openOthersBox} className='flex items-center justify-center gap-3 rounded-md border-2 border-gray-400 dark:border-white p-2 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 cursor-pointer'>
                        <FaPlusCircle className='dark:text-white text-gray-800 font-bold text-xl mx-1' />
                        Others
                    </div>
                </div>



                {
                    openedDailog ? <div className="dailog">


                        <h3 className="text-2xl font-bold my-0 mt-5">Add {dailog.title} </h3>
                        <div className="flex items-center justify-between my-3 gap-5">

                            <div className="w-[50%]">
                                <select onChange={changeDailogtype} name="blog-content-type" className="my-3 font-bold dark:text-white text-black dark:focus:bg-gray-700 focus:bg-gray-100 rounded-md py-3 px-2 w-full outline-none border border-2   border-gray-400 focus:border-dotted dark:focus:border-white focus:border-gray-800  bg-inherit disabled:bg-gray-300 disabled:text-gray-400">
                                    {
                                        Array.from(theTags[dailog.title.toLowerCase()]).map((tag, index) => {
                                            return (
                                                <option key={index} value={tag}>{tag}</option>
                                            )
                                        })
                                    }
                                </select>
                            </div>

                            <div className="w-[50%]">
                                <input type="text" onChange={e => setTypingTitle(e.target.value)} name="heading-text" autoComplete='off' placeholder="Enter your heading text" className="my-3 font-bold dark:text-white text-black dark:focus:bg-gray-700 focus:bg-gray-100 rounded-md py-3 px-2 w-full outline-none border border-2   border-gray-400 focus:border-dotted dark:focus:border-white focus:border-gray-800  bg-inherit disabled:bg-gray-300 disabled:text-gray-400" />
                            </div>

                        </div>
                        <div>
                            <textarea onChange={e => setTypingCss(e.target.value)} rows={10} name="css classes" autoComplete='off' placeholder="Type Css eg 
                    color:white;
                    font-size: 20px;
                    
                    " className="my-3 font-bold dark:text-white text-black dark:focus:bg-gray-700 focus:bg-gray-100 rounded-md py-3 px-2 w-full outline-none border border-2   border-gray-400 focus:border-dotted dark:focus:border-white focus:border-gray-800  bg-inherit disabled:bg-gray-300 disabled:text-gray-400" />
                        </div>

                        <FormsButton type={"button"} loading={false} text={"Add"} clickFun={clickToSave} />
                    </div> : ""
                }







                <div className="preview mt-10">
                    <h2 className='text-2xl font-bold my-5'>Your Blog Preview </h2>
                    <div className="preview-main my-10">


                        {
                            finalHtml.map((content, index) => {
                                return <div dangerouslySetInnerHTML={{ __html: content }} key={index} className="blog-content-preview"></div>;
                            })
                        }



                    </div>

                </div>

            </div>

        </div>
    )
}

export default BlogForm
