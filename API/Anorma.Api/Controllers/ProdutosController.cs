using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Anorma.Api.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class ProdutosController : ControllerBase
    {
        [HttpGet]
        public string Get()
        {
            return "Hello";
        }
    }
}