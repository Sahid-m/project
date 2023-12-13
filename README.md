# Desc

This is a Portfolio Site for Sahid Munjavar , a Computer Science Student. 

# How to get this running for you:
1. Clone this repo
2. run "npm install"
3. start npm "npm start run" 

# How to add Projects Page 

1. Add the following code in ProjectsPage.js 

            <div>
              <Link to="/project/{YourProjectName}">
                <img
                  src={Your Image Imported Name}
                  className="img-thumbnail"
                  alt="{Image Alt}"
                ></img>
                <h1 className="display-5 projecthead">
                  {Heading For Project}
                </h1>
              </Link>
            </div>

2. Now Add the following in App.js

        <Route
            path="/project/{ProjectsName}"
            element={
              <Projects
                heading="{Your Project Heading}"
                img={ Your Image Imported Name }
                alt="{Alt Image Text}"
                gitlink="{Your Github repo Link}"
                desc="{Your Project Description}"
              />
            }
        />

You have successfully added your Project
