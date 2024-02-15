module.exports = ({ env }) => ({
    "vercel-deploy": {
      enabled: true,
      config: {
        deployHook:
          "https://api.vercel.com/v1/integrations/deploy/prj_fpaNJst2FrvNv8hzAFkfonU2qsDb",
        apiToken: "CwB7LcIcd2IB6rjNbm8g6dMa",
        appFilter: "backend-strapi",
        teamFilter: "team_NlVa6ooJwarQ7VGveeZdFZKi",
        roles: ["strapi-super-admin", "strapi-editor", "strapi-author"],
      },
    },
  });