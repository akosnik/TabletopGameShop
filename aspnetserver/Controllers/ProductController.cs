//using Microsoft.AspNetCore.Mvc;

//namespace aspnetserver.Controllers
//{
//    public class ProductController : Controller
//    {
//        public IActionResult Index()
//        {
//            return View();
//        }
//    }
//}

using aspnetserver.Dtos.Product;
using aspnetserver.Dtos.User;
using aspnetserver.Persistence.Models;
using aspnetserver.Persistence.Repository.ProductRepository;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace aspnetserver.Controllers
{
    [Route("api/products")]
    [ApiController]
    public class ProductController : ControllerBase
    {
        private readonly ILogger<ProductController> _logger;
        private readonly IProductRepository _productRepository;

        public ProductController(ILogger<ProductController> logger, IProductRepository productRepository)
        {
            _logger = logger;
            _productRepository = productRepository;
        }

        [HttpGet("all")]
        public async Task<IActionResult> AllProducts()
        {
            List<GetProductDto> ProductList = await _productRepository.GetAllProducts();
            return Ok(ProductList);
        }

        [HttpGet("/view/{productId}")]
        public async Task<IActionResult> SingleProduct(int productId)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            GetProductDto product = await _productRepository.GetProductById(productId);
            return Ok(product);
        }

        //[HttpPost()]
        //public async Task<IActionResult> AddProduct([FromBody] ProductFormDto productInfo)
        //{
        //    if (!ModelState.IsValid)
        //    {
        //        return BadRequest(ModelState);
        //    }

        //    GetProductDto product = await _productRepository.AddProduct(productInfo);
        //    return Ok(product);
        //}

        //[HttpPut("{productId}")]
        //public async Task<IActionResult> EditProduct([FromBody] ProductFormDto productInfo, int productId)
        //{
        //    if (!ModelState.IsValid)
        //    {
        //        return BadRequest(ModelState);
        //    }

        //    GetProductDto product = await _productRepository.UpdateProduct(productInfo, productId);
        //    return Ok(product);
        //}

        //[HttpDelete("{productId}")]
        //public async Task<IActionResult> DeleteProduct(int productId)
        //{
        //    if (!ModelState.IsValid)
        //    {
        //        return BadRequest(ModelState);
        //    }

        //    GetProductDto product = await _productRepository.DeleteProduct(productId);
        //    return Ok(product);
        //}
    }
}
