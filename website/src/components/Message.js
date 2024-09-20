import React from "react";
import { AiFillCloseCircle } from 'react-icons/ai';

/**
 * The component can be used to highlight the text in the documentation. 
 * For example, use it to highlight the errors, warnings in the troubleshooting guide.
 * @param {*} props: 
 *                  messageContainerClassName - is the css class name that you want to style the component. 
 *                  caption - message caption for example, error, warning etc.
 *                  captionClassName - the css class name to style the heading
 *                  messageContent - the content that you wish to display in the component
 *                  messageContentClassName - the css class name to style the message content
 * @returns a html component
 */
export default function Message(props) {
    const { messageContainerClassName, caption, captionClassName, messageContent, messageContentClassName } = props;
    return (
        <div className={messageContainerClassName}>
            <div className={captionClassName}>{caption}</div>
            <div className={messageContentClassName}>
                <AiFillCloseCircle className="error-icon" />
                {messageContent}
            </div>
        </div>
    );
};