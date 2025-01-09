---
description: >-
  Framework functions
---

# Global Functions

Global functions in Appsmith enable you to trigger various actions for widget events and within JS Objects. These functions allow you to navigate to other pages, display alert messages, open or close modals, and manage data in local storage, among other capabilities.

Browse this section to learn about the different actions you can trigger on Appsmith.
<div className="containerGridSampleApp">
   {/* clearInterval Function Card */}
   <a className="containerAnchor containerColumnSampleAppNoGradient columnGrid column-one" href="/reference/appsmith-framework/widget-actions/clear-interval">
      <div className="containerHead">
         <div className="containerHeading">
            <b>clearInterval</b>
         </div>
      </div>
      <hr className="gradient-hr" />
      <div className="containerDescription">
         Clears a previously set interval, stopping the specified repeated action.
      </div>
   </a>

   {/* clearStore Function Card */}
   <a className="containerAnchor containerColumnSampleAppNoGradient columnGrid column-two" href="/reference/appsmith-framework/widget-actions/clear-store">
      <div className="containerHead">
         <div className="containerHeading">
            <b>clearStore</b>
         </div>
      </div>
      <hr className="gradient-hr" />
      <div className="containerDescription">
         Clears all stored values, effectively resetting the local storage state.
      </div>
   </a>

   {/* closeModal Function Card */}
   <a className="containerAnchor containerColumnSampleAppNoGradient columnGrid column-one" href="/reference/appsmith-framework/widget-actions/close-modal">
      <div className="containerHead">
         <div className="containerHeading">
            <b>closeModal</b>
         </div>
      </div>
      <hr className="gradient-hr" />
      <div className="containerDescription">
         Closes an open Modal widget.
      </div>
   </a>

   {/* copyToClipboard Function Card */}
   <a className="containerAnchor containerColumnSampleAppNoGradient columnGrid column-two" href="/reference/appsmith-framework/widget-actions/copy-to-clipboard">
      <div className="containerHead">
         <div className="containerHeading">
            <b>copyToClipboard</b>
         </div>
      </div>
      <hr className="gradient-hr" />
      <div className="containerDescription">
         Copies the given text to the clipboard, making it available for pasting.
      </div>
   </a>

   {/* download Function Card */}
   <a className="containerAnchor containerColumnSampleAppNoGradient columnGrid column-one" href="/reference/appsmith-framework/widget-actions/download">
      <div className="containerHead">
         <div className="containerHeading">
            <b>download</b>
         </div>
      </div>
      <hr className="gradient-hr" />
      <div className="containerDescription">
         Downloads the file data provided, with an optional file name and type.
      </div>
   </a>

   {/* navigateTo Function Card */}
   <a className="containerAnchor containerColumnSampleAppNoGradient columnGrid column-two" href="/reference/appsmith-framework/widget-actions/navigate-to">
      <div className="containerHead">
         <div className="containerHeading">
            <b>navigateTo</b>
         </div>
      </div>
      <hr className="gradient-hr" />
      <div className="containerDescription">
         Navigates to a different page or URL, either within the Appsmith app or externally.
      </div>
   </a>

   {/* postWindowMessage Function Card */}
   <a className="containerAnchor containerColumnSampleAppNoGradient columnGrid column-one" href="/reference/appsmith-framework/widget-actions/post-window-message">
      <div className="containerHead">
         <div className="containerHeading">
            <b>postWindowMessage</b>
         </div>
      </div>
      <hr className="gradient-hr" />
      <div className="containerDescription">
         Posts a message to another window, facilitating communication between multiple windows.
      </div>
   </a>

   {/* removeValue Function Card */}
   <a className="containerAnchor containerColumnSampleAppNoGradient columnGrid column-two" href="/reference/appsmith-framework/widget-actions/remove-value">
      <div className="containerHead">
         <div className="containerHeading">
            <b>removeValue</b>
         </div>
      </div>
      <hr className="gradient-hr" />
      <div className="containerDescription">
         Removes a stored value, clearing it from local storage or session storage.
      </div>
   </a>

   {/* resetWidget Function Card */}
   <a className="containerAnchor containerColumnSampleAppNoGradient columnGrid column-one" href="/reference/appsmith-framework/widget-actions/reset-widget">
      <div className="containerHead">
         <div className="containerHeading">
            <b>resetWidget</b>
         </div>
      </div>
      <hr className="gradient-hr" />
      <div className="containerDescription">
         Resets a widget to its default state, clearing any set values or changes.
      </div>
   </a>

   {/* setInterval Function Card */}
   <a className="containerAnchor containerColumnSampleAppNoGradient columnGrid column-two" href="/reference/appsmith-framework/widget-actions/set-interval">
      <div className="containerHead">
         <div className="containerHeading">
            <b>setInterval</b>
         </div>
      </div>
      <hr className="gradient-hr" />
      <div className="containerDescription">
         Sets a recurring interval, executing a function repeatedly at the specified time intervals.
      </div>
   </a>

   {/* showAlert Function Card */}
   <a className="containerAnchor containerColumnSampleAppNoGradient columnGrid column-one" href="/reference/appsmith-framework/widget-actions/show-alert">
      <div className="containerHead">
         <div className="containerHeading">
            <b>showAlert</b>
         </div>
      </div>
      <hr className="gradient-hr" />
      <div className="containerDescription">
         Shows an alert message, displaying a brief notification to the user.
      </div>
   </a>

   {/* showModal Function Card */}
   <a className="containerAnchor containerColumnSampleAppNoGradient columnGrid column-two" href="/reference/appsmith-framework/widget-actions/show-modal">
      <div className="containerHead">
         <div className="containerHeading">
            <b>showModal</b>
         </div>
      </div>
      <hr className="gradient-hr" />
      <div className="containerDescription">
         Displays a modal dialog with content, allowing users to interact with additional information.
      </div>
   </a>

   {/* storeValue Function Card */}
   <a className="containerAnchor containerColumnSampleAppNoGradient columnGrid column-one" href="/reference/appsmith-framework/widget-actions/store-value">
      <div className="containerHead">
         <div className="containerHeading">
            <b>storeValue</b>
         </div>
      </div>
      <hr className="gradient-hr" />
      <div className="containerDescription">
         Stores a value locally, allowing you to use it in other parts of your app or across sessions.
      </div>
   </a>

   {/* unlistenWindowMessage Function Card */}
   <a className="containerAnchor containerColumnSampleAppNoGradient columnGrid column-two" href="/reference/appsmith-framework/widget-actions/unlisten-window-message">
      <div className="containerHead">
         <div className="containerHeading">
            <b>unlistenWindowMessage</b>
         </div>
      </div>
      <hr className="gradient-hr" />
      <div className="containerDescription">
         Removes a message listener from another window, stopping the reception of posted messages.
      </div>
   </a>

   {/* windowMessageListener Function Card */}
   <a className="containerAnchor containerColumnSampleAppNoGradient columnGrid column-one" href="/reference/appsmith-framework/widget-actions/window-message-listener">
      <div className="containerHead">
         <div className="containerHeading">
            <b>windowMessageListener</b>
         </div>
      </div>
      <hr className="gradient-hr" />
      <div className="containerDescription">
         Listens for messages posted from another window, allowing communication across windows.
      </div>
   </a>
</div>
