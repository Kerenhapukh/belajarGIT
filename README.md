# belajarGIT
Daftar tugas / branch 
Tugas-git
Tugas-html
Tugas-css
Tugas-js
Tugas-midProject
Tugas-php
Tugas-finalProject
Daftar perintah GIT

asus@LAPTOP-T458CUSN MINGW64 ~/OneDrive/Documents/Apa stow
$ git init
Initialized empty Git repository in C:/Users/asus/OneDrive/Documents/Apa stow/.git/

asus@LAPTOP-T458CUSN MINGW64 ~/OneDrive/Documents/Apa stow (master)
$ git clone https://github.com/Kerenhapukh/belajarGIT.git
Cloning into 'belajarGIT'...
remote: Enumerating objects: 6, done.
remote: Counting objects: 100% (6/6), done.
remote: Compressing objects: 100% (3/3), done.
remote: Total 6 (delta 0), reused 0 (delta 0), pack-reused 0
Receiving objects: 100% (6/6), done.

asus@LAPTOP-T458CUSN MINGW64 ~/OneDrive/Documents/Apa stow (master)
$ cd belajarGIT

asus@LAPTOP-T458CUSN MINGW64 ~/OneDrive/Documents/Apa stow/belajarGIT (main)
$ git branch Tugas-git

asus@LAPTOP-T458CUSN MINGW64 ~/OneDrive/Documents/Apa stow/belajarGIT (main)
$ git checkout Tugas-git
Switched to branch 'Tugas-git'

asus@LAPTOP-T458CUSN MINGW64 ~/OneDrive/Documents/Apa stow/belajarGIT (Tugas-git)
$ git status
On branch Tugas-git
nothing to commit, working tree clean

asus@LAPTOP-T458CUSN MINGW64 ~/OneDrive/Documents/Apa stow/belajarGIT (Tugas-git)
$ git add Tugas-git
fatal: pathspec 'Tugas-git' did not match any files

asus@LAPTOP-T458CUSN MINGW64 ~/OneDrive/Documents/Apa stow/belajarGIT (Tugas-git)
$ git status
On branch Tugas-git
nothing to commit, working tree clean

asus@LAPTOP-T458CUSN MINGW64 ~/OneDrive/Documents/Apa stow/belajarGIT (Tugas-git)
$ git add Tugas-git
fatal: pathspec 'Tugas-git' did not match any files

asus@LAPTOP-T458CUSN MINGW64 ~/OneDrive/Documents/Apa stow/belajarGIT (Tugas-git)
$ git add Tugas-git.txt
fatal: pathspec 'Tugas-git.txt' did not match any files

asus@LAPTOP-T458CUSN MINGW64 ~/OneDrive/Documents/Apa stow/belajarGIT (Tugas-git)
$ git status
On branch Tugas-git
Untracked files:
  (use "git add <file>..." to include in what will be committed)
        Tugas-git.txt

nothing added to commit but untracked files present (use "git add" to track)

asus@LAPTOP-T458CUSN MINGW64 ~/OneDrive/Documents/Apa stow/belajarGIT (Tugas-git)
$ git add Tugas-git.txt

asus@LAPTOP-T458CUSN MINGW64 ~/OneDrive/Documents/Apa stow/belajarGIT (Tugas-git)
$ git status
On branch Tugas-git
Changes to be committed:
  (use "git restore --staged <file>..." to unstage)
        new file:   Tugas-git.txt


asus@LAPTOP-T458CUSN MINGW64 ~/OneDrive/Documents/Apa stow/belajarGIT (Tugas-git)
$ git commit -m "tugas git"
Author identity unknown

*** Please tell me who you are.

Run

  git config --global user.email "you@example.com"
  git config --global user.name "Your Name"

to set your account's default identity.
Omit --global to set the identity only in this repository.

fatal: unable to auto-detect email address (got 'asus@LAPTOP-T458CUSN.(none)')

asus@LAPTOP-T458CUSN MINGW64 ~/OneDrive/Documents/Apa stow/belajarGIT (Tugas-git)
$ git config --global user.email "kerenhapukhwaworuntu026@student.unsrat.ac.id"

asus@LAPTOP-T458CUSN MINGW64 ~/OneDrive/Documents/Apa stow/belajarGIT (Tugas-git)
$ git config --global user.name "Kerenhapukh"

asus@LAPTOP-T458CUSN MINGW64 ~/OneDrive/Documents/Apa stow/belajarGIT (Tugas-git)
$ git commit -m "tugas git"
[Tugas-git 5a98118] tugas git
 1 file changed, 0 insertions(+), 0 deletions(-)
 create mode 100644 Tugas-git.txt

asus@LAPTOP-T458CUSN MINGW64 ~/OneDrive/Documents/Apa stow/belajarGIT (Tugas-git)
$ git checkout main
Switched to branch 'main'
Your branch is up to date with 'origin/main'.

asus@LAPTOP-T458CUSN MINGW64 ~/OneDrive/Documents/Apa stow/belajarGIT (main)
$ git merge Tugas-git
Updating 35ef013..5a98118
Fast-forward
 Tugas-git.txt | 0
 1 file changed, 0 insertions(+), 0 deletions(-)
 create mode 100644 Tugas-git.txt

asus@LAPTOP-T458CUSN MINGW64 ~/OneDrive/Documents/Apa stow/belajarGIT (main)
$ git push
Enumerating objects: 4, done.
Counting objects: 100% (4/4), done.
Delta compression using up to 4 threads
Compressing objects: 100% (2/2), done.
Writing objects: 100% (3/3), 293 bytes | 293.00 KiB/s, done.
Total 3 (delta 0), reused 0 (delta 0), pack-reused 0 (from 0)
To https://github.com/Kerenhapukh/belajarGIT.git
   35ef013..5a98118  main -> main

asus@LAPTOP-T458CUSN MINGW64 ~/OneDrive/Documents/Apa stow/belajarGIT (main)
$ git branch Tugas-html

asus@LAPTOP-T458CUSN MINGW64 ~/OneDrive/Documents/Apa stow/belajarGIT (main)
$ git status
On branch main
Your branch is up to date with 'origin/main'.

nothing to commit, working tree clean

asus@LAPTOP-T458CUSN MINGW64 ~/OneDrive/Documents/Apa stow/belajarGIT (main)
$ git checkout Tugas-html
Switched to branch 'Tugas-html'

asus@LAPTOP-T458CUSN MINGW64 ~/OneDrive/Documents/Apa stow/belajarGIT (Tugas-html)
$ git status
On branch Tugas-html
nothing to commit, working tree clean

asus@LAPTOP-T458CUSN MINGW64 ~/OneDrive/Documents/Apa stow/belajarGIT (Tugas-html)
$ git add Tugas-html.txt
fatal: pathspec 'Tugas-html.txt' did not match any files

asus@LAPTOP-T458CUSN MINGW64 ~/OneDrive/Documents/Apa stow/belajarGIT (Tugas-html)
$ git add Tugas-html.txt
fatal: pathspec 'Tugas-html.txt' did not match any files

asus@LAPTOP-T458CUSN MINGW64 ~/OneDrive/Documents/Apa stow/belajarGIT (Tugas-html)
$ git add Tugas-html.txt

asus@LAPTOP-T458CUSN MINGW64 ~/OneDrive/Documents/Apa stow/belajarGIT (Tugas-html)
$ git status
On branch Tugas-html
Changes to be committed:
  (use "git restore --staged <file>..." to unstage)
        new file:   Tugas-html.txt


asus@LAPTOP-T458CUSN MINGW64 ~/OneDrive/Documents/Apa stow/belajarGIT (Tugas-html)
$ git commit -m "Tugas Html"
[Tugas-html 06b7200] Tugas Html
 1 file changed, 0 insertions(+), 0 deletions(-)
 create mode 100644 Tugas-html.txt

asus@LAPTOP-T458CUSN MINGW64 ~/OneDrive/Documents/Apa stow/belajarGIT (Tugas-html)
$ git checkout main
Switched to branch 'main'
Your branch is up to date with 'origin/main'.

asus@LAPTOP-T458CUSN MINGW64 ~/OneDrive/Documents/Apa stow/belajarGIT (main)
$ git merge Tugas-html
Updating 5a98118..06b7200
Fast-forward
 Tugas-html.txt | 0
 1 file changed, 0 insertions(+), 0 deletions(-)
 create mode 100644 Tugas-html.txt

asus@LAPTOP-T458CUSN MINGW64 ~/OneDrive/Documents/Apa stow/belajarGIT (main)
$ git push
Enumerating objects: 3, done.
Counting objects: 100% (3/3), done.
Delta compression using up to 4 threads
Compressing objects: 100% (2/2), done.
Writing objects: 100% (2/2), 296 bytes | 148.00 KiB/s, done.
Total 2 (delta 0), reused 0 (delta 0), pack-reused 0 (from 0)
To https://github.com/Kerenhapukh/belajarGIT.git
   5a98118..06b7200  main -> main

asus@LAPTOP-T458CUSN MINGW64 ~/OneDrive/Documents/Apa stow/belajarGIT (main)
$ git branch Tugas-css

asus@LAPTOP-T458CUSN MINGW64 ~/OneDrive/Documents/Apa stow/belajarGIT (main)
$ git checkout Tugas-css
Switched to branch 'Tugas-css'

asus@LAPTOP-T458CUSN MINGW64 ~/OneDrive/Documents/Apa stow/belajarGIT (Tugas-css)
$ git add TUgas-css.txt
fatal: pathspec 'TUgas-css.txt' did not match any files

asus@LAPTOP-T458CUSN MINGW64 ~/OneDrive/Documents/Apa stow/belajarGIT (Tugas-css)
$ git add TUgas-css.txt

asus@LAPTOP-T458CUSN MINGW64 ~/OneDrive/Documents/Apa stow/belajarGIT (Tugas-css)
$ git commit-m "tugasCss"
git: 'commit-m' is not a git command. See 'git --help'.

The most similar command is
        commit-tree

asus@LAPTOP-T458CUSN MINGW64 ~/OneDrive/Documents/Apa stow/belajarGIT (Tugas-css)
$ git commit -m "tugasCss"
On branch Tugas-css
Untracked files:
  (use "git add <file>..." to include in what will be committed)
        Tugas-css.txt

nothing added to commit but untracked files present (use "git add" to track)

asus@LAPTOP-T458CUSN MINGW64 ~/OneDrive/Documents/Apa stow/belajarGIT (Tugas-css)
$ git commit -m "Tugas-css"
On branch Tugas-css
Untracked files:
  (use "git add <file>..." to include in what will be committed)
        Tugas-css.txt

nothing added to commit but untracked files present (use "git add" to track)

asus@LAPTOP-T458CUSN MINGW64 ~/OneDrive/Documents/Apa stow/belajarGIT (Tugas-css)
$ git add TUgas-css.txt

asus@LAPTOP-T458CUSN MINGW64 ~/OneDrive/Documents/Apa stow/belajarGIT (Tugas-css)
$ git status
On branch Tugas-css
Untracked files:
  (use "git add <file>..." to include in what will be committed)
        Tugas-css.txt

nothing added to commit but untracked files present (use "git add" to track)

asus@LAPTOP-T458CUSN MINGW64 ~/OneDrive/Documents/Apa stow/belajarGIT (Tugas-css)
$ git add .

asus@LAPTOP-T458CUSN MINGW64 ~/OneDrive/Documents/Apa stow/belajarGIT (Tugas-css)
$ git commit -m "Tugas-css"
[Tugas-css 7a0ac43] Tugas-css
 1 file changed, 0 insertions(+), 0 deletions(-)
 create mode 100644 Tugas-css.txt

asus@LAPTOP-T458CUSN MINGW64 ~/OneDrive/Documents/Apa stow/belajarGIT (Tugas-css)
$ git checkout main
Switched to branch 'main'
Your branch is up to date with 'origin/main'.

asus@LAPTOP-T458CUSN MINGW64 ~/OneDrive/Documents/Apa stow/belajarGIT (main)
$ git merge Tugas-css
Updating 06b7200..7a0ac43
Fast-forward
 Tugas-css.txt | 0
 1 file changed, 0 insertions(+), 0 deletions(-)
 create mode 100644 Tugas-css.txt

asus@LAPTOP-T458CUSN MINGW64 ~/OneDrive/Documents/Apa stow/belajarGIT (main)
$ git push
Enumerating objects: 3, done.
Counting objects: 100% (3/3), done.
Delta compression using up to 4 threads
Compressing objects: 100% (2/2), done.
Writing objects: 100% (2/2), 248 bytes | 248.00 KiB/s, done.
Total 2 (delta 1), reused 0 (delta 0), pack-reused 0 (from 0)
remote: Resolving deltas: 100% (1/1), completed with 1 local object.
To https://github.com/Kerenhapukh/belajarGIT.git
   06b7200..7a0ac43  main -> main

asus@LAPTOP-T458CUSN MINGW64 ~/OneDrive/Documents/Apa stow/belajarGIT (main)
$ git branch Tugas-js

asus@LAPTOP-T458CUSN MINGW64 ~/OneDrive/Documents/Apa stow/belajarGIT (main)
$ git checkout Tugas-js
Switched to branch 'Tugas-js'

asus@LAPTOP-T458CUSN MINGW64 ~/OneDrive/Documents/Apa stow/belajarGIT (Tugas-js)
$ git add Tugas-js
fatal: pathspec 'Tugas-js' did not match any files

asus@LAPTOP-T458CUSN MINGW64 ~/OneDrive/Documents/Apa stow/belajarGIT (Tugas-js)
$ git add Tugas-js
fatal: pathspec 'Tugas-js' did not match any files

asus@LAPTOP-T458CUSN MINGW64 ~/OneDrive/Documents/Apa stow/belajarGIT (Tugas-js)
$ git add Tugas-js.txt

asus@LAPTOP-T458CUSN MINGW64 ~/OneDrive/Documents/Apa stow/belajarGIT (Tugas-js)
$ git commit -m "TugasJS"
[Tugas-js 79b85f7] TugasJS
 1 file changed, 0 insertions(+), 0 deletions(-)
 create mode 100644 Tugas-js.txt

asus@LAPTOP-T458CUSN MINGW64 ~/OneDrive/Documents/Apa stow/belajarGIT (Tugas-js)
$ git checkout main
Switched to branch 'main'
Your branch is up to date with 'origin/main'.

asus@LAPTOP-T458CUSN MINGW64 ~/OneDrive/Documents/Apa stow/belajarGIT (main)
$ git merge Tugas-js
Updating 7a0ac43..79b85f7
Fast-forward
 Tugas-js.txt | 0
 1 file changed, 0 insertions(+), 0 deletions(-)
 create mode 100644 Tugas-js.txt

asus@LAPTOP-T458CUSN MINGW64 ~/OneDrive/Documents/Apa stow/belajarGIT (main)
$ git push
Enumerating objects: 3, done.
Counting objects: 100% (3/3), done.
Delta compression using up to 4 threads
Compressing objects: 100% (2/2), done.
Writing objects: 100% (2/2), 243 bytes | 243.00 KiB/s, done.
Total 2 (delta 1), reused 0 (delta 0), pack-reused 0 (from 0)
remote: Resolving deltas: 100% (1/1), completed with 1 local object.
To https://github.com/Kerenhapukh/belajarGIT.git
   7a0ac43..79b85f7  main -> main

asus@LAPTOP-T458CUSN MINGW64 ~/OneDrive/Documents/Apa stow/belajarGIT (main)
$ git branch Tugas-midProject

asus@LAPTOP-T458CUSN MINGW64 ~/OneDrive/Documents/Apa stow/belajarGIT (main)
$ git checkout Tugas-midProject
Switched to branch 'Tugas-midProject'

asus@LAPTOP-T458CUSN MINGW64 ~/OneDrive/Documents/Apa stow/belajarGIT (Tugas-midProject)
$ git add Tugas-js
fatal: pathspec 'Tugas-js' did not match any files

asus@LAPTOP-T458CUSN MINGW64 ~/OneDrive/Documents/Apa stow/belajarGIT (Tugas-midProject)
$ git add Tugas-midProject
fatal: pathspec 'Tugas-midProject' did not match any files

asus@LAPTOP-T458CUSN MINGW64 ~/OneDrive/Documents/Apa stow/belajarGIT (Tugas-midProject)
$ git add Tugas-midProject.txt

asus@LAPTOP-T458CUSN MINGW64 ~/OneDrive/Documents/Apa stow/belajarGIT (Tugas-midProject)
$ git commit -m "Tugas-midProject"
[Tugas-midProject 1b75c65] Tugas-midProject
 1 file changed, 0 insertions(+), 0 deletions(-)
 create mode 100644 Tugas-midProject.txt

asus@LAPTOP-T458CUSN MINGW64 ~/OneDrive/Documents/Apa stow/belajarGIT (Tugas-midProject)
$ git checkout maihn
error: pathspec 'maihn' did not match any file(s) known to git

asus@LAPTOP-T458CUSN MINGW64 ~/OneDrive/Documents/Apa stow/belajarGIT (Tugas-midProject)
$ git checkout main
Switched to branch 'main'
Your branch is up to date with 'origin/main'.

asus@LAPTOP-T458CUSN MINGW64 ~/OneDrive/Documents/Apa stow/belajarGIT (main)
$ git merge Tugas-midProject
Updating 79b85f7..1b75c65
Fast-forward
 Tugas-midProject.txt | 0
 1 file changed, 0 insertions(+), 0 deletions(-)
 create mode 100644 Tugas-midProject.txt

asus@LAPTOP-T458CUSN MINGW64 ~/OneDrive/Documents/Apa stow/belajarGIT (main)
$ git push
Enumerating objects: 3, done.
Counting objects: 100% (3/3), done.
Delta compression using up to 4 threads
Compressing objects: 100% (2/2), done.
Writing objects: 100% (2/2), 263 bytes | 263.00 KiB/s, done.
Total 2 (delta 1), reused 0 (delta 0), pack-reused 0 (from 0)
remote: Resolving deltas: 100% (1/1), completed with 1 local object.
To https://github.com/Kerenhapukh/belajarGIT.git
   79b85f7..1b75c65  main -> main

asus@LAPTOP-T458CUSN MINGW64 ~/OneDrive/Documents/Apa stow/belajarGIT (main)
$ git branch Tugas-php

asus@LAPTOP-T458CUSN MINGW64 ~/OneDrive/Documents/Apa stow/belajarGIT (main)
$ git checkout Tugas-php
Switched to branch 'Tugas-php'

asus@LAPTOP-T458CUSN MINGW64 ~/OneDrive/Documents/Apa stow/belajarGIT (Tugas-php)
$ git add Tugas-php.txt

asus@LAPTOP-T458CUSN MINGW64 ~/OneDrive/Documents/Apa stow/belajarGIT (Tugas-php)
$ git commit -m "Tugas-php"
[Tugas-php 2992aa9] Tugas-php
 1 file changed, 0 insertions(+), 0 deletions(-)
 create mode 100644 Tugas-php.txt

asus@LAPTOP-T458CUSN MINGW64 ~/OneDrive/Documents/Apa stow/belajarGIT (Tugas-php)
$ git checkout main
Switched to branch 'main'
Your branch is up to date with 'origin/main'.

asus@LAPTOP-T458CUSN MINGW64 ~/OneDrive/Documents/Apa stow/belajarGIT (main)
$ git merge Tugas-php
Updating 1b75c65..2992aa9
Fast-forward
 Tugas-php.txt | 0
 1 file changed, 0 insertions(+), 0 deletions(-)
 create mode 100644 Tugas-php.txt

Enumerating objects: 3, done.~/OneDrive/Documents/Apa stow/belajarGIT (main)
Counting objects: 100% (3/3), done.
Delta compression using up to 4 threads
Compressing objects: 100% (2/2), done.
Writing objects: 100% (2/2), 249 bytes | 249.00 KiB/s, done.
remote: Resolving deltas: 100% (1/1), completed with 1 local object.
To https://github.com/Kerenhapukh/belajarGIT.git
   1b75c65..2992aa9  main -> main

asus@LAPTOP-T458CUSN MINGW64 ~/OneDrive/Documents/Apa stow/belajarGIT (main)
$ git branch Tugas-finalProject

asus@LAPTOP-T458CUSN MINGW64 ~/OneDrive/Documents/Apa stow/belajarGIT (main)
$ git checkout Tugas-finalProject
Switched to branch 'Tugas-finalProject'

asus@LAPTOP-T458CUSN MINGW64 ~/OneDrive/Documents/Apa stow/belajarGIT (Tugas-finalProject)
$ git add Tugas-finalProject.txt

asus@LAPTOP-T458CUSN MINGW64 ~/OneDrive/Documents/Apa stow/belajarGIT (Tugas-finalProject)
$ git commit -m "Tugas-finalProject"
[Tugas-finalProject 2b65d02] Tugas-finalProject
 1 file changed, 0 insertions(+), 0 deletions(-)
 create mode 100644 Tugas-finalProject.txt

asus@LAPTOP-T458CUSN MINGW64 ~/OneDrive/Documents/Apa stow/belajarGIT (Tugas-finalProject)
$ git checkout main
Switched to branch 'main'
Your branch is up to date with 'origin/main'.

asus@LAPTOP-T458CUSN MINGW64 ~/OneDrive/Documents/Apa stow/belajarGIT (main)
$ git merge Tugas-finalProject
Updating 2992aa9..2b65d02
Fast-forward
 Tugas-finalProject.txt | 0
 1 file changed, 0 insertions(+), 0 deletions(-)
 create mode 100644 Tugas-finalProject.txt

asus@LAPTOP-T458CUSN MINGW64 ~/OneDrive/Documents/Apa stow/belajarGIT (main)
$ git push
Enumerating objects: 3, done.
Counting objects: 100% (3/3), done.
Delta compression using up to 4 threads
Compressing objects: 100% (2/2), done.
Writing objects: 100% (2/2), 265 bytes | 265.00 KiB/s, done.
Total 2 (delta 1), reused 0 (delta 0), pack-reused 0 (from 0)
remote: Resolving deltas: 100% (1/1), completed with 1 local object.
To https://github.com/Kerenhapukh/belajarGIT.git
   2992aa9..2b65d02  main -> main

asus@LAPTOP-T458CUSN MINGW64 ~/OneDrive/Documents/Apa stow/belajarGIT (main)
$ git push origin --all
Total 0 (delta 0), reused 0 (delta 0), pack-reused 0 (from 0)
To https://github.com/Kerenhapukh/belajarGIT.git
 * [new branch]      Tugas-css -> Tugas-css
 * [new branch]      Tugas-finalProject -> Tugas-finalProject
 * [new branch]      Tugas-git -> Tugas-git
 * [new branch]      Tugas-html -> Tugas-html
 * [new branch]      Tugas-js -> Tugas-js
 * [new branch]      Tugas-midProject -> Tugas-midProject
 * [new branch]      Tugas-php -> Tugas-php

asus@LAPTOP-T458CUSN MINGW64 ~/OneDrive/Documents/Apa stow/belajarGIT (main)
$
