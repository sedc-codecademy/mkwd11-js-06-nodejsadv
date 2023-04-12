# FLOW TO ADD FILE FROM OUR LOCAL REPO TO REMOTE REPO

- git status => checks the status of the current local git repository
- git add [file name ] => add/stages the untracked file
- git add . => adds/stages all untracked files in the CURRENT DIRECOTRY
- git commit -m "message here" => commits the added/staged file (those are the files that are in GREEN when we write the git command git status)
- git push => pushes (sends) the added/staged files from THE LOCAL REPOSITORY TO THE REMOTE REPOSITORY

# CREATING A BRAND NEW BRANCH OUT OF A BRANCH

- Lets say we want to create a new branch out of the main or master branch
- We have to be in the branch that we want to create branch of (lets say we have opened the terminal, we are at the local repository, and the current branch we are at is main)

- git branch => shows us the current branch we are on (it will have \* and will be in green)
- git checkout [branch name] => we will switch from one branch to another
- git checkout -b [branch name] => will create new branch out of the current branch we are at.

- (lets say we are on main branch) git checkout -b header => will create new branch with the name header out of the main branch
