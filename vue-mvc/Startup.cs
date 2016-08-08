using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(vue_mvc.Startup))]
namespace vue_mvc
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
