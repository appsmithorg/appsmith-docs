import React from "react";
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
export default function Highlighter(props) {
    const {highlighterClassName, content} = props;
    return (
        <span className={highlighterClassName}>{content}</span>
    );
};