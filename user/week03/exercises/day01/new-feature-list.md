# Step-by-step list for a new feature

  - git switch -c feature-n
  - create a new branch and switch to it

  - git status
  - check the files to be added to the stage after finishing working on the required features

  - git add .
  - adding all modified and new files to the stage to be committed

  - git status
  - check the files to be committed after finishing working on the feature

  - git commit -m "commit message"
  - commit the changes to the branch feature-n

  - git switch main
  - switch to the branch main

  - git merge feature-n
  - merging branch feature-n into the main branch

  - git branch -d feature-n
  - deleting branch feature-n