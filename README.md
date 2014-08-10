## html-css-js_acm-csku ##
====================

### repository for HTML-CSS-JS workshop ###


## Steps to join and clone the repository (project files) ##

I have created this documentation so that any member can join the repository easily :)

// Pre-req:

* Github account (please make if you don't have one)
* Git installed on your PC (you can install it through msysgit [ http://msysgit.github.io/ ]
(for any help in installation, ask me or anyone who knows git)

// Steps:

/***** To join the repository ******/
goto:
https://github.com/ShahnawazAli93/html-css-js_acm-csku.git

and click on the watch and star button

/***** To clone the project reporsitory on your hdd *****/

New user:

(if you are using git first time, first follow these steps)
1> Open command prompt
2> type

git config --global user.name "yourUsername"
git config --global user.email yourEmail

Example
git config --global user.name "Shahnawaz Ali"
git config --global user.email mr_shah@live.com

(if git asked for password, type your password)

Clone the repo:

1> Open command prompt
2> Go to the folder where you wish to clone that repository files

don't create any new folder, after clone it will create a folder for you.

Example
before clone:
D:\ACM\ACM-Project\
(correct)
D:\ACM\ACM-Project\[Project Name]\
(wrong)
after clone:
D:\ACM\ACM-Project\html-css-js_acm-csku
(correct)
D:\ACM\ACM-Project\[Project Name]\html-css-js_acm-csku
(wrong)

Actually both are fine but by creating a new folder (by yourself) you will have to type "cd" one extra time

3> now type

git clone https://github.com/ShahnawazAli93/html-css-js_acm-csku.git

this will pull all the project files from the remote repository

4> after any change (or when you want to commit the code locally), type

git add -A
git commit -m "message"

Your message should be short and indicate what changes you have made

5> to push these new changes to remote repository (on actual remote repo), type

git push origin master

6> to pull new changes from remote repository, type

git pull origin master

// Note:

* There's only one branch on remote repository i.e: "master", so type the full command

git pull origin master
	actual structure -> git pull [remoteName] [branchName]
git push origin master
	actual structure -> git push [remoteName] [branchName]

instead of
git push
or
git pull

* After executing any git command you will see the description of what happened, watch for any error