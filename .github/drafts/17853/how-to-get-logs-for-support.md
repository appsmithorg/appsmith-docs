# Guide: How to get logs on Appsmith

This document will guide you on how to get the logs Appsmith on self-hosted deployments (such as Docker). These logs are frequently requested by members of the Appsmith Support team to properly troubleshoot bugs.

## Table of Contents

1. [Get Logs of a self-hosted instance](/17853#get-logs-of-a-self-hosted-instance)
2. [Get the logs of a self-hosted instance by command](/17853#get-the-logs-of-a-self-hosted-instance-by-command)
3. [Get useful information on the cloud version](/17853#get-useful-information-on-the-cloud-version)
4. [Profiling app load time](/17853#profiling-app-load-time)
5. [Performance Report](/17853#performance-report)

### Get Logs of a self-hosted instance

1. Go to the folder where you have your self-hosted instance.
![img](17853/step1.png)
2. Go into the folder called `stacks.`
![img](17853/step2.png)
3. Go into the folder called `logs`
![img](17853/step3.png)
4. In this folder there are several logs A-Force usually requests the backend logs, but you may be asked for any or even all of these.
![img](17853/step4.png)
5. Enter the folder of the logs that you were requested in this case it will be `Backend`
![img](17853/step5.png)
6. And here you have the log files to send them, you can use any method you see fit

### Get the logs of a self-hosted instance by command

1. Create a folder where you will save your logs
2. Navigate to the folder created above with the command `cd mylogfolder`
3. Run this command `sudo docker logs appsmith &> appsmithLogs.log`
4. If you want the logs to continue to be saved in real time, run this command `sudo docker logs -f appsmith &> appsmithLogs.log`
5. In the folder you created there will be a file with your logs ready to send to the support team.
6. Console example
   ```console
      work@pop-os:~/Desktop$ mkdir appsmithlogs
      work@pop-os:~/Desktop$ cd appsmithlogs
      work@pop-os:~/Desktop/appsmithlogs$ sudo docker logs appsmith &> appsmithLogs.log
      work@pop-os:~/Desktop/appsmithlogs$ ls
      appsmithLogs.log
      work@pop-os:~/Desktop/appsmithlogs$
   ```
### Get useful information on the cloud version

1. Go to the browser menu
2. Click on `More Tools`
3. Click on `developer tools`
4. Click on `NetWork`
5. Click on the arrow you are looking down to download the network logs.
6. Change the extension from `.jar`to `.log`
7. You can now share those network logs with the Appsmith team.

[Video Tutorial](https://www.loom.com/share/f36a27f8418b481ea326c86883617799)


### Profiling app load time

1. Go to your app/link and right click (two finger tap on Mac).
![img](/17853/1.png)
2. Click on `inspect` option and verify that it opens following panel.
![img](/17853/2.png)
3. Click on the `Performance` Tab
![img](/17853/3.png)
4. Make sure the options `Screenshots Memory` and `Web Vitals`are checked.
![img](/17853/4.png)
5. Click on the `Reload` button and verify that you see the profiling in progress.
![img](/17853/5.png)
6. Wait till it completes. (IMPORTANT, please let it complete even if it takes 5 mins)
![img](/17853/6.png)
7. At the end you should see something similar to following image.
![img](/17853/7.png)
8. Please click on `Save Profile` and save it.
![img](/17853/8.png)
![img](/17853/9.png)
9. Please share the exported `<filename>.json` file with us for further analysis. 

### Performance Report

1. Go to your app/link and right click (two finger tap on mac).
![img](/17853/1.png)
2. Click on `inspect` option and verify that it opens following panel.
![img](/17853/2.png)
3. Click on the `Performance` Tab
![img](/17853/3.png)
4. Make sure the options `Screenshots Memory` and `Web Vitals`are checked.
![img](/17853/4.png)
5. Click on the `record` button. Wait for 5 seconds.
![img](/17853/record.png)
6. Perform the action that is slow, it could be clicking on a table, navigating to a page, or clicking a button that call an API. Wait for 5 seconds after your finish your action and stop the recording.
![img](/17853/6.png)
7. Wait till it completes. Usually processing the profile takes time and its normal.(IMPORTANT, please let it complete even if it takes 5 mins)
![img](/17853/6.png)
8. At the end you should see something similar to following image.
![img](/17853/7.png)
9. Please click on `Save Profile` and save it.
![img](/17853/8.png)
![img](/17853/9.png)
10. Please share the exported `<filename>.json` file with us for further analysis. 
