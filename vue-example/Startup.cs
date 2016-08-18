using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(vue_example.Startup))]
namespace vue_example
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
