// LATEST POST

$.ajax({
	url: 'api/berita',
	dataType: 'json',
	success:function(ambildata){
		$.each(ambildata.data.artikel,function(key,value){
			$(".tampilberita").append(
					`
			  <ul class="entry__meta">
                    <li class="entry__meta-category">
                      <a href="#">${value.kategori}</a>
                    </li>
                  </ul>
                  <div class="entry__img-holder">
                    <a href="single-post-games">
                      <div class="thumb-container thumb-75">
                        <img data-src="assets/img/artikel/${value.foto}" src="img/empty.png" class="entry__img lazyload" alt="" />
                      </div>
                    </a>
                  </div>

                  <div class="entry__body">
                    <div class="entry__header">
                      <h2 class="entry__title">
                        <a href="/berita/${value.slug}">${value.judul}</a>
                      </h2>
                      <ul class="entry__meta">
                        <li class="entry__meta-author">
                          <span>by</span>
                          <a href="#">${value.author}</a>
                        </li>
                        <li class="entry__meta-date">
                          Jan 21, 2018
                        </li>
                      </ul>
                    </div>
                  </div>
					`
				)
		})
	}
})


// $.ajax({
//   url: 'api/berita',
//   dataType: 'json',
//   success:function(ambildata){
//     $.each(ambildata.data.artikel,function(key,value){
//       $(".tampil").append(
//           `
//             <ul class="entry__meta">
//                     <li class="entry__meta-category">
//                       <a href="#">${value.kategori}</a>
//                     </li>
//                   </ul>
//                   <div class="entry__img-holder">
//                     <a href="single-post-games">
//                       <div class="thumb-container thumb-75">
//                         <img data-src="assets/img/artikel/${value.foto}" src="img/empty.png" class="entry__img lazyload" alt="" />
//                       </div>
//                     </a>
//                   </div>

//                   <div class="entry__body">
//                     <div class="entry__header">
//                       <h2 class="entry__title">
//                         <a href="${value.slug}">${value.judul}</a>
//                       </h2>
//                       <ul class="entry__meta">
//                         <li class="entry__meta-author">
//                           <span>by</span>
//                           <a href="#">${value.author}</a>
//                         </li>
//                         <li class="entry__meta-date">
//                           Jan 21, 2018
//                         </li>
//                       </ul>
//                     </div>
//                   </div>
//           `
//         )
//     })
//   }
// })


// SINGLEPOST

// $.ajax({
// 	url: 'api/berita',
// 	dataType: 'json',
// 	success:function(ambildata){
// 		$.each(ambildata.data.detail,function(key,value){
// 			$(".singlepost").append(
// 				`
// 				 <div class="single-post__entry-header entry__header">
//                 <ul class="entry__meta">
//                   <li class="entry__meta-category">
//                     <a href="#">${value.kategori}</a>
//                   </li>              
//                 </ul>
//                 <h1 class="single-post__entry-title">
//                   ${value.judul}
//                 </h1>
//                 <div class="entry__meta-holder">
//                   <ul class="entry__meta">
//                     <li class="entry__meta-author">
//                       <span>by</span>
//                       <a href="#">${value.author}</a>
//                     </li>
//                   </ul>

//                   <ul class="entry__meta">
//                     <li class="entry__meta-views">
//                       <i class="ui-eye"></i>
//                       <span>1356</span>
//                     </li>
//                     <li class="entry__meta-comments">
//                       <a href="#">
//                         <i class="ui-chat-empty"></i>13
//                       </a>
//                     </li>
//                   </ul>
//                 </div>
//               </div>
                            

//               <div class="entry__article-wrap">

//                 <!-- Share -->
//                 <div class="entry__share">
//                   <div class="sticky-col">
//                     <div class="socials socials--rounded socials--large">
//                       <a class="social social-facebook" href="#" title="facebook" target="_blank" aria-label="facebook">
//                         <i class="ui-facebook"></i>
//                       </a>
//                       <a class="social social-twitter" href="#" title="twitter" target="_blank" aria-label="twitter">
//                         <i class="ui-twitter"></i>
//                       </a>
//                       <a class="social social-google-plus" href="#" title="google" target="_blank" aria-label="google">
//                         <i class="ui-google"></i>
//                       </a>
//                       <a class="social social-pinterest" href="#" title="pinterest" target="_blank" aria-label="pinterest">
//                         <i class="ui-pinterest"></i>
//                       </a>
//                     </div>
//                   </div>                  
//                 </div> <!-- share -->

//                 <div class="entry__article">

//                   <blockquote><p>“${value.konten}”</p>
//                   </blockquote>                          


//                   <figure class="alignleft">
//                     <img src="assets/img/artikel/${value.foto}" alt="" class="lazyload">
//                     <figcaption>Having specific asks</figcaption>
//                   </figure>             

                

//                   <figure class="alignright">
//                     <img data-src="img/content/single/single_post_img_2.jpg" src="img/empty.png" alt="" class="lazyload">
//                     <figcaption>make it happen</figcaption>
//                   </figure>  

          
//                   <h5>List of features</h5>
//                   <ul>
//                     <li>Reusable components</li>
//                     <li>Multiple niches</li>
//                     <li>Lightning fast</li>
//                     <li>BEM methodology</li>
//                     <li>Organized JS/Sass files</li>
//                   </ul>                  


//                   <!-- Final Review -->
//                   <div class="final-review" style="background-image: url('img/content/single/final_review.jpg')">                    
//                     <div class="final-review__score">
//                       <span class="final-review__score-number">9.2</span>
//                     </div>
//                     <div class="final-review__text-holder">
//                       <h6 class="final-review__title">Great</h6>
//                       <p class="final-review__text">Lovingly rendered real-world space tech,playing through actual missions is a special thrill,scoring system gives much needed additional incentive to perfect your designs</p>
//                     </div>
//                   </div> <!-- end final review -->

//                   <!-- tags -->
//                   <div class="entry__tags">
//                     <i class="ui-tags"></i>
//                     <span class="entry__tags-label">Tags:</span>
//                     <a href="#" rel="tag">mobile</a><a href="#" rel="tag">gadgets</a><a href="#" rel="tag">satelite</a>
//                   </div> <!-- end tags -->

//                 </div> <!-- end entry article -->
//               </div> <!-- end entry article wrap -->


// 				`


// 				)
// 		})
// 	}
// })