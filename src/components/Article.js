import React from "react";

function Article({ key, title, date = "January 1, 1970", preview, mintues }) {

    return (<>

        <article>
            <div id={key}>{key}</div>
            <h3>{title}</h3>
            <small>{date}</small>
            <p>{preview}</p>

        </article>

    </>)

}

export default Article