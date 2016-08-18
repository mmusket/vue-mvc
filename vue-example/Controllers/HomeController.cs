using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Newtonsoft.Json;
using vue_example.Models;

namespace vue_example.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            var serverModel = JsonConvert.SerializeObject(new
            {
                Name = "Marco",
                Surname = "Muscat",
                Description = "Vue data loaded from razor!"
            });

            return View(new SampleModel()
            {
                Data = serverModel
            });
        }

        public JsonResult GetData()
        {
            return Json(new
            {
                Name = "Marco",
                Surname = "Muscat",
                Description = "Vue data loaded from razor!"
            },JsonRequestBehavior.AllowGet);
        }

        public ActionResult About()
        {
            ViewBag.Message = "Your application description page.";

            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }
    }
}