import React, { Component } from 'react';
 
class portfolio extends Component {
    render() {
        return (
		
            <section class="portfolio section" id="portfolio">
            <div class="container">
                <div class="row ">
                    <div class="col-lg-12">
                        
                        <div class="title text-center">
                            <h2>Cul<span class="color">ture</span></h2>
                            <div class="border"></div>
                        </div>
                        
                    </div> 
                </div>
                </div> 
                <div class="row">
                    <div class="col-md-12">
                        <div class="portfolio-filter">
                            <button class="active" type="button" data-filter="all">All</button>
                            <button type="button" data-filter="sports">Sports</button>
                            <button type="button" data-filter="art">Art</button>
                            <button type="button" data-filter="food">Food</button>
                        </div>
                    </div>
                </div>
                <div class="row mx-auto ">
                    <div class="filtr-item col-lg-4 col-md-6" data-category="sports">
                        <div class="portfolio-block"  >
                            <img src="images/portfolio/reds.jpg" alt=""/>
                            <div class="caption">
                                <a class="search-icon image-popup" data-effect="mfp-with-zoom" href="images/portfolio/reds.jpg"
                                    data-lightbox="image-1">
                                    <i class="tf-ion-android-search"></i>
                                </a>
                                <h4><a href="">Cincinnati Reds</a></h4>
                                <p class="mb-0">The Cincinnati Reds is our baseball team</p>
                            </div>
                        </div>
                    </div>
                    <div class="filtr-item col-lg-4 col-md-6" data-category="sports">
                        <div class="portfolio-block">
                            <img src="images/portfolio/bengals.jpg" alt=""/>
                            <div class="caption">
                                <a class="search-icon image-popup" data-effect="mfp-with-zoom" href="images/portfolio/bengals.jpg"
                                    data-lightbox="image-1">
                                    <i class="tf-ion-android-search"></i>
                                </a>
                                <h4><a href="">The Bengals</a></h4>
                                <p class="mb-0">WHO-DEY our signature saying for our football team The Bengals</p>
                            </div>
                        </div>
                    </div>
                     <div class="filtr-item col-lg-4 col-md-6" data-category="sports">
                        <div class="portfolio-block">
                            <img src="images/portfolio/fc.jpg" alt=""/>
                            <div class="caption">
                                <a class="search-icon image-popup" data-effect="mfp-with-zoom" href="images/portfolio/fc.jpg"
                                    data-lightbox="image-1">
                                    <i class="tf-ion-android-search"></i>
                                </a>
                                <h4><a href="">FC Cincinnati</a></h4>
                                <p class="mb-0">FC Cincinnati is our first ever soccer team founded in 2018</p>
                            </div>
                        </div>
                    </div>
                    <div class="filtr-item col-lg-4 col-md-6" data-category="art">
                        <div class="portfolio-block">
                            <img src="images/portfolio/vangogh.jpg" alt=""/>
                            <div class="caption">
                                <a class="search-icon image-popup" data-effect="mfp-with-zoom" href="images/portfolio/vangogh.jpg"
                                    data-lightbox="image-1">
                                    <i class="tf-ion-android-search"></i>
                                </a>
                                <h4><a href="">The Van Gogh Art Museum</a></h4>
                                <p class="mb-0">The Van Gogh museum was recently opened earlier 2022 to the public to give an art history of the historical painter.</p>
                            </div>
                        </div>
                    </div>
                    <div class="filtr-item col-lg-4 col-md-6" data-category="art">
                        <div class="portfolio-block">
                            <img src="images/portfolio/artcenter.jpg" alt=""/>
                            <div class="caption">
                                <a class="search-icon image-popup" data-effect="mfp-with-zoom" href="images/portfolio/artcenter.jpg"
                                    data-lightbox="image-1">
                                    <i class="tf-ion-android-search"></i>
                                </a>
                                <h4><a href="">Contemporary Art Center</a></h4>
                                <p class="mb-0">This art center is one of our most popular art atractions in the Cincinnati area houses art from a lot of local artists best pieces.</p>
                            </div>
                        </div>
                    </div> 
                    <div class="filtr-item col-lg-4 col-md-6" data-category="art">
                        <div class="portfolio-block">
                            <img src="images/portfolio/playhouse.jpg" alt=""/>
                            <div class="caption">
                                <a class="search-icon image-popup" data-effect="mfp-with-zoom" href="images/portfolio/playhouse.jpg"
                                    data-lightbox="image-1">
                                    <i class="tf-ion-android-search"></i>
                                </a>
                                <h4><a href="">Play House In The Park</a></h4>
                                <p class="mb-0">Our theater provides a live performance of many famous plays and create an immursive feeling for the audience.</p>
                            </div>
                        </div>
                    </div>
                    <div class="filtr-item col-lg-4 col-md-6" data-category="design">
                        <div class="portfolio-block">
                            <img src="images/portfolio/union.jpg" alt=""/>
                            <div class="caption">
                                <a class="search-icon image-popup" data-effect="mfp-with-zoom" href="images/portfolio/union.jpg"
                                    data-lightbox="image-1">
                                    <i class="tf-ion-android-search"></i>
                                </a>
                                <h4><a href="">Union Center Terminal</a></h4>
                                <p class="mb-0">Union Center Terminal was founded in the 1920's connecting multiple rail lines but over time it eventually became an art museum for the public.</p>
                            </div>
                        </div>
                    </div>
                    <div class="filtr-item col-lg-4 col-md-6" data-category="food">
                        <div class="portfolio-block">
                            <img src="images/portfolio/icecream.jpg" alt=""/>
                            <div class="caption">
                                <a class="search-icon image-popup" data-effect="mfp-with-zoom" href="images/portfolio/icecream.jpg"
                                    data-lightbox="image-1">
                                    <i class="tf-ion-android-search"></i>
                                </a>
                                <h4><a href="">Greaters</a></h4>
                                <p class="mb-0">Greaters is one of the biggest ice cream franchises in Cincinnati and is home of the black berry raspberry chocolate chip.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="filtr-item col-lg-4 col-md-6" data-category="food">
                        <div class="portfolio-block">
                            <img src="images/portfolio/pizza.jpg" alt=""/>
                            <div class="caption">
                                <a class="search-icon image-popup" data-effect="mfp-with-zoom" href="images/portfolio/pizza.jpg"
                                    data-lightbox="image-1">
                                    <i class="tf-ion-android-search"></i>
                                </a>
                                <h4><a href="">La Rosa's</a></h4>
                                <p class="mb-0">La Rosa's is our famous local pizzeria founded in 1954 by Buddy Larosa.</p>
                            </div>
                        </div>
                    </div>
                </div>
        </section> 

);
    }
}
export default portfolio;