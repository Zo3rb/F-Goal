﻿# F-Goal Project

For all football (soccer) lover - from Fan to a Fan.

### Description:

Simple Application provides a simple news and information for all the football lovers.
With authentication system (to be able to like and comment on a new, event or a blog post from our side).
backend created with: [Python](https://www.python.org/), [Flask](https://flask.palletsprojects.com/en/2.3.x/) and [MySQL](https://www.mysql.com/)
frontend created with [JavaScript](https://www.javascript.com/) and [React.js](https://react.dev/)

### Data Model:

#### Authentication:

Can found with details at the postman collection file provided [HERE](./F-Goal.postman_collection.json)

#### Blogging:

Created using GUI of MySQL-Workbench
<img src="./F-goal.png" />
[SQL File](./schema.sql)
[EED File](./F-Goal.mwb)

### Usage:

- Download the Project's Repo
- open a Terminal within the project's folder
- Create virtual environment for the project and activate it
  - code -> ` python -m venv venv`
  - linux -> `source venv/Scripts/activate`
  - windows -> `venv\Scripts\activate`
- Install the project's dependencies
  - code -> `pip install -r requirements.txt`
  - code -> `cd frontend && npm install`
- copy the environment file and fill it with yours
  - code -> `cp ./.env.example ./.env` << --- it supposed to create a new file ".env" in the project folder
- Now, get sure that you're in the project's root folder (not frontend or backend) and type these commands in sequence:
  `flask shell` - this will open sub-shell in your current shell
  `from backend import db`
  `from backend.auth.model import User`
  `from backend.category.model import Category`
  `from backend.post.model import Post`
  `from backend.comment.model import Comment`
  `from backend.like.model import Like`
  `db.create_all()` <<--- you supposed not to see any errors till this step or make sure you filled the .env file correctly
  `exit()`
  `python ./server.py`

##### If everything is bootstrapped successfully you should see Image like below:

<img src="./shell.png" />
