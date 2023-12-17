const sellersCariuselData = [
    {
        img: './assets/images/sellers/img1.png',
        title: 'Riponahmed001',
        subtitle: '40 Artworks',
    },
    {
        img: './assets/images/sellers/img2.png',
        title: 'Mukterhossain',
        subtitle: '40 Artworks',
    },
    {
        img: './assets/images/sellers/img3.png',
        title: 'Jalalahmed12',
        subtitle: '40 Artworks',
    },
    {
        img: './assets/images/sellers/img4.png',
        title: 'Samiya0321',
        subtitle: '40 Artworks',
    },
    {
        img: './assets/images/sellers/img5.png',
        title: 'Jalalahmed12',
        subtitle: '40 Artworks',
    },
    {
        img: './assets/images/sellers/img6.png',
        title: 'Sofiyakhan54',
        subtitle: '40 Artworks',
    },
    {
        img: './assets/images/sellers/img1.png',
        title: 'Riponahmed001',
        subtitle: '40 Artworks',
    },
    {
        img: './assets/images/sellers/img2.png',
        title: 'Mukterhossain',
        subtitle: '40 Artworks',
    },
    {
        img: './assets/images/sellers/img3.png',
        title: 'Jalalahmed12',
        subtitle: '40 Artworks',
    },
    {
        img: './assets/images/sellers/img4.png',
        title: 'Samiya0321',
        subtitle: '40 Artworks',
    },
    {
        img: './assets/images/sellers/img5.png',
        title: 'Jalalahmed12',
        subtitle: '40 Artworks',
    },
    {
        img: './assets/images/sellers/img6.png',
        title: 'Sofiyakhan54',
        subtitle: '40 Artworks',
    },
];

function drawCarouselItem(count) {
    let str = '';

    for(let i = 0; i < sellersCariuselData.length / count; i++) {
        str += `
            <div class="carousel-item ${i == 0 ? 'active' : ''}">
                <div class="row">
        `;

        for (let j = i * count; j < i * count + count; j++) {
            str += `
                <div class="col col-md-6 col-lg-4">
                    <div class="card cursor-pointer">
                        <div class="card-body p-4">
                            <div class="row">
                                <div class="col col-12 col-sm-6 col-xl-5 p-0 pl-sm-3 pr-sm-3 text-center text-md-left">
                                    <img src=${sellersCariuselData[j].img} alt="seller">
                                </div>
                                
                                <div class="col col-12 col-sm-6 col-xl-7 pt-3 p-md-0 pl-sm-2 text-center text-md-left d-flex flex-column justify-content-center">
                                    <h5 class="card-title">${sellersCariuselData[j].title}</h5>
                                    <h6 class="card-subtitle mb-2 text-muted">${sellersCariuselData[j].subtitle}</h6>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            `;
        }

        str += `
                </div>
            </div>
        `;
    }

    return str;
}

function media() {
    let count;
    if (window.matchMedia("(max-width: 768px)").matches) count = 1;
    else if(window.matchMedia("(max-width: 991px)").matches) count = 4;
    else count = 6

    $('#sellersCarousel .carousel-inner').html(drawCarouselItem(count));

    $('.carousel').carousel('cycle');
}

media();

$(window).on('resize', () => media())