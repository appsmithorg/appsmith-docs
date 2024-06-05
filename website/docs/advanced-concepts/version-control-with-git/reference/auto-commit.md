# Auto Commit

This page provides information on the Auto Commit feature, which automatically commits changes related to version upgrades. This ensures your app stays updated with the latest features without manual intervention.


- Whenever you upgrade your Appsmith instance, the DSL (Domain Specific Language) that describes your app's layout and interactions is updated. 

- Auto commit happens to a non-protected branch when you open the branch on your app. The auto-commit will not take place if you are not actively using the app.

- With the auto commit, only the changes related to Appsmith's DSL components are committed, not your specific app changes. 

*Example:*

If you are working on a Table widget in your app. When Appsmith updates its version and auto commits, only the changes related to the updated Table widget—like new properties or methods—are committed. Your specific customizations, such as styling or behavior modifications, remain unaffected and aren't committed. You can find DSL-related changes in your Git repository inside the relevant page folder.




<dd>

 ```js
 "dsl": {
          "widgetName": "MainContainer",
          "backgroundColor": "none",
          "rightColumn": 4896,
          "snapColumns": 64,
          "detachFromLayout": true,
          "widgetId": "0",
          "bottomRow": 1000, 
          "snapRows": 124,
          "parentRowSpace": 1,
          "type": "CANVAS_WIDGET",
          "canExtend": true,
          // highlight-next-line
          "version": 89,
          "minHeight": 1292,
          "dynamicTriggerPathList": [],
          "parentColumnSpace": 1,
        },
    ```


    </dd>