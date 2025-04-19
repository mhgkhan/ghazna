"use client"

import React from 'react'
import DOMPurify from 'dompurify';

const BlogPostContent = ({ body, title }) => {

    // const pureHtml = DOMPurify.sanitize(body, {
    //     USE_PROFILES: { html: true },
    //     // ADD_ATTR: ['target', 'rel'],
    //     // FORBID_TAGS: ['script', 'iframe'],
    //     // FORBID_ATTR: ['style', 'onerror', 'onclick']
    // })

    return (
        <article id="blogpost-content" className='blogpost-content px-1 py-5' dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(`
                     <section style="margin-bottom: 30px; padding: 20px;">
                <h1 style="font-size: 28px; margin-bottom: 15px;">The Forgotten Languages of the Digital Age: Reviving Ancient Scripts with AI</h1>
                <p style="font-size: 18px; margin-bottom: 20px;">
                    In today’s fast-paced digital era, ancient languages and scripts are quietly slipping away into obscurity, leaving behind unanswered questions about our collective past. However, the very technology that has driven us forward—artificial intelligence—holds the potential to bring these fading voices back to life. With AI’s advanced capabilities, we’re witnessing a new dawn in cultural preservation, where ancient wisdom can meet modern innovation.
                </p>
            </section>

            <section style="margin-bottom: 30px; padding: 20px;">
                <article style="margin-bottom: 20px;">
                    <h2 style="font-size: 24px; margin-bottom: 10px;">The Silent Decline of Ancient Languages</h2>
                    <p style="font-size: 16px; margin-bottom: 15px;">
                        Languages are more than just means of communication—they’re cultural identities, carriers of stories, and repositories of history. Yet many ancient scripts have been lost or forgotten due to colonization, migration, and globalization. Each extinction not only erases words but also disconnects us from the unique perspectives and heritage of those who came before us.
                    </p>
                </article>

                <article style="margin-bottom: 20px;">
                    <h2 style="font-size: 24px; margin-bottom: 10px;">Artificial Intelligence: A New Hope</h2>
                    <p style="font-size: 16px; margin-bottom: 15px;">
                        Artificial intelligence has emerged as a powerful tool for decoding and preserving ancient languages. By identifying patterns in texts and reconstructing incomplete scripts, AI is unlocking secrets that have remained hidden for centuries. For instance, projects like the Dead Sea Scrolls decoding initiative have used machine learning to translate fragments into comprehensible texts, offering remarkable insights into human history.
                    </p>
                </article>

                <article style="margin-bottom: 20px;">
                    <h2 style="font-size: 24px; margin-bottom: 10px;">Beyond Preservation: Practical Applications</h2>
                    <p style="font-size: 16px; margin-bottom: 15px;">
                        The revival of ancient languages can extend beyond mere preservation. Imagine incorporating these scripts into immersive video games or creating interactive educational tools to teach students about history and culture. By blending the old and the new, we can foster appreciation for linguistic diversity while innovating in unexpected ways.
                    </p>
                </article>

                <article style="margin-bottom: 20px;">
                    <h2 style="font-size: 24px; margin-bottom: 10px;">Ethical Considerations and Collaboration</h2>
                    <p style="font-size: 16px; margin-bottom: 15px;">
                        While AI opens doors to preserving linguistic heritage, it also raises questions about ethics. Who controls these digital resources? How do we ensure the inclusion of indigenous voices in these projects? Collaboration between technologists, historians, and communities is essential to ensure that these efforts remain respectful and equitable.
                    </p>
                </article>
            </section>
                    
                    ` , {
                USE_PROFILES: { html: true },
            })
        }}>

        </article >
        // <>


        // </>
    )
}

export default BlogPostContent
