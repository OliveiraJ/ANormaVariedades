using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Anorma.Api.Services;
using Anorma.Api.Models;

namespace Anorma.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CategoriasController : ControllerBase
    {
        private readonly CategoriasServices _categoriasServices;

        public CategoriasController(CategoriasServices categoriasServices)
        {
            _categoriasServices = categoriasServices;
        }

        [HttpGet]
        public async Task<ActionResult<Categorias>> Categrias()
        {
            return await _categoriasServices.GetCategorias();
        }
    }
}