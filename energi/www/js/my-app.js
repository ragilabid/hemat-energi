// Initialize your app
var myApp = new Framework7({
    material: true,

    pushState: true,

    pushStateNoAnimation: true,

    cache: false,

    onAjaxStart: function (xhr) {
        myApp.showIndicator();
    },

    onAjaxComplete: function (xhr) {
        myApp.hideIndicator();
    }
});

// Export selectors engine
var $$ = Dom7;

// Add view
var mainView = myApp.addView('.view-main', {
    // Because we use fixed-through navbar we can enable dynamic navbar
    //domChace: true
});

// Callbacks to run specific code for specific pages, for example for About page:
    //page index behaviour
$$(document).on('pageInit', function(e) {
    var page = e.detail.page;

    var part = [
            "Bagian 1", 
            "Bagian 2", 
            "Bagian 3", 
            "Bagian 4",
            "Bagian 5",
            "Bagian 6",
            "Bagian 7",
            "Bagian 8",
            "Bagian 9",
            "Bagian 10"
        ];

    var item = "<ul>";

    for(var i = 0; i < part.length; i++) {
        item += '<li>' + 
                    '<a href="part-' + [i+1] + '.html" class="item-link item-content">' +
                        '<div class="item-media">' +
                            '<img src="../www/img/gambar/lampu.png" width="25">' +
                        '</div>' +
                        '<div class="item-inner">' +
                            '<div class="item-title-row">' +
                                '<div class="item-title">' + part[i] + '</div>' +
                             '</div>' +
                        '</div>' +
                    '</a>' +
                '</li>';
    }

    item += "</ul>";

    $$(page.container).find('#panel-menu').append(item);

});
    //page menu behaviour
$$(document).on('pageInit', '.page[data-page="menu"]', function(e) {
    var page = e.detail.page;
    //do all thing here

    var part = [
            "Bagian 1", 
            "Bagian 2", 
            "Bagian 3", 
            "Bagian 4",
            "Bagian 5",
            "Bagian 6",
            "Bagian 7",
            "Bagian 8",
            "Bagian 9",
            "Bagian 10"

        ];

    var title = [
            "Kehidupan Tanpa Listrik", 
            "Adanya Listrik", 
            "Konsumsi Listrik di Indonesia", 
            "Peningkatan Konsumsi Listrik",
            "Daya Listrik",
            "Mengetahui Daya Listrik di Rumah",
            "Perhitungan Tagihan Listrik",
            "Identifikasi Kegiatan Hemat Energi",
            "Perilaku Hemat Energi",
            "Tips Hemat Energi"

        ];

    var item = "<ul>";

    for(var i = 0; i < part.length; i++) {
        item += '<li>' + 
                    '<a href="part-' + [i+1] + '.html" class="item-link item-content">' +
                        '<div class="item-media">' +
                            '<img src="../www/img/gambar/lampu.png" width="70">' +
                        '</div>' +
                        '<div class="item-inner">' +
                            '<div class="item-title-row">' +
                                '<div class="item-title">' + part[i] + '</div>' +
                             '</div>' +
                            '<div class="item-text">' + title[i] + '</div>' +
                        '</div>' +
                    '</a>' +
                '</li>';
    }

    item += "</ul>";

    $$(page.container).find('#content-menu').append(item);
});

    //page part-1 behaviour
$$(document).on('pageInit', '.page[data-page="part-1"]', function(e) {

    var alert_1 = '<p>Apakah anda bisa membayangkan kehidupan saat ini tanpa listrik ?</p>';
    var callback_1 =  '<ul>' +
                        '<li><p>aktivitas terbatas</p></li>' +
                        '<li><p>waktu beraktivitas pendek</p></li>' +
                        '<li><p>produktivitas rendah</p></li>' +
                    '</ul>';
    var callback_2 = '<p>terima kasih atas partisipasinya :)</p>'

    $$('.open-slider-modal').on('click', function () {
        var modal = myApp.modal({
            title: 'ayo berkhayal !',
            text: alert_1,

            buttons: [
                {
                    text: 'tdk pernah :(',
                    onClick: function () {
                      myApp.alert(callback_2, 'info')
                    }
                },
                {
                    text: 'pernah :)',
                    onClick: function () {
                      myApp.alert(callback_1, 'hal-hal yg terjadi')
                    }
                },
            ]
        })
    });

});

    //page part-2 bahaviour
$$(document).on('pageInit', '.page[data-page="part-2"]', function(e) {

    var alert_1 = '<p>adanya listrik membuat kehidupan berubah</p>';
    var alert_2 = '<ul>' +
                        '<li><p>aktivitas menjadi lebih bervariasi di segala tempat</p></li>' +
                        '<li><p>waktu aktivitas lebih panjang, karena bisa beraktivitas di malam hari</p></li>' +
                    '</ul>';
    // 1 Slide Per View, 50px Between
    var mySwiper1 = myApp.swiper('.swiper-1', {
        pagination:'.swiper-1 .swiper-pagination',
        spaceBetween: 50,
        paginationClickable: true

    });

    $$('.alert-text-title-callback').on('click', function() {
        myApp.alert(alert_1, 'info', function () {
            myApp.alert(alert_2, 'dampak')
        });
    });

});

    //page part-3 behaviour
$$(document).on('pageInit', '.page[data-page="part-3"]', function(e) {
    // 1 Slide Per View, 50px Between
    var mySwiper1 = myApp.swiper('.swiper-2', {
        pagination:'.swiper-2 .swiper-pagination',
        spaceBetween: 50
    });

});

    //page part-5 behaviour
$$(document).on('pageInit', '.page[data-page="part-5"]', function(e) {
    var alert_1 = '<p>adalah besarnya daya listrik yang terpasang dari PLN di rumah pelanggan dengan satuan VA (Volt Ampere)</p>';
    var alert_2 = '<p>adalah daya listrik yang digunakan untuk peralatan listrik dengan satuan W (Watt)</p>';
    var alert_3 = '<p>adalah besarnya daya yang digunakan untuk pembangkitan medan magnet pada peralatan listrik yang bersifat induksi seperti mesin air, kipas angin, ballast lampu, AC dan lain-lain.</p>';

    $$('.alert-text-title-callback-1').on('click', function() {
        myApp.alert(alert_1, 'daya nyata (s)');
    });

    $$('.alert-text-title-callback-2').on('click', function() {
        myApp.alert(alert_2, 'daya aktif (p)');
    });

    $$('.alert-text-title-callback-3').on('click', function() {
        myApp.alert(alert_3, 'daya semu (q)');
    });

});

    //page part-6 behaviour
$$(document).on('pageInit', '.page[data-page="part-6"]', function(e) {

    var mySwiper1 = myApp.swiper('.swiper-3', {
        pagination:'.swiper-3 .swiper-pagination',
        spaceBetween: 50
    });

});

    //page part-7 behaviour
$$(document).on('pageInit', '.page[data-page="part-7"]', function(e) {

    var alert_1 = "<p>18 kwh x rp 1.352,00 per kwh</p>"+
                    "<b>Total rp 24.336,00</b>";
    var alert_2 = "<p>18 kwh x rp 1.524,24 per kwh</p>"+
                    "<b>Total rp 24.336,00</b>";
    var alert_3 = "<p>18 kwh x rp 1.524,24 per kwh</p>"+
                    "<b>Total rp 27.436,32</b>";

    $$('.alert-text-title-1').on('click', function() {
        myApp.alert(alert_1, 'R1(1.300-2.300 VA)');
    });

    $$('.alert-text-title-2').on('click', function() {
        myApp.alert(alert_2, 'R2(3.500-5.500 VA)');
    });

    $$('.alert-text-title-3').on('click', function() {
        myApp.alert(alert_3, 'R3(>6.600 VA)');
    });
});

    //page part-8 behaviour
$$(document).on('pageInit', '.page[data-page="part-8"]', function(e) {

    var page = e.detail.page;
    //do all thing here
    var pos = 0, test_status, question, choice, choices, correct = 0, response = '';
    var questions = [
        ["Saya aktif malakukan penghematan energi di rumah dan sekolah, dan paham alasan melakukannya", "Ya", "Tidak", "true"],
        ["Saya paham perlunya penghematan energi dan tertarik melakukannya", "Ya", "Tidak", "true"],
        ["Saya melakukan beberapa tindakan penghematan dan terkadang berbagi informasi dengan anggota keluarga dan rekan kerja", "Ya", "Tidak", "true"],
        ["Saya kadang-kadang berusaha melakukan penghematan energi", "Ya", "Tidak", "true"],
        ["Secara umum paham, dan sudah secara aktif melakukan penghematan energi", "Ya", "Tidak", "true"]
        
    ];

     function renderQuestion() {
        console.log("renderQuestion called");        

        var test_status_inner = "Pertanyaan ke " + (pos + 1) + " dari " + questions.length;
        $$(page.container).find('#progress').html(test_status_inner);

        if(pos >= questions.length) {
            if(correct < 3) {
                response = 'Anda belum aktif melakukan kegiatan hemat energi';
            }
            else if(correct >= 3) {
                response = 'Anda telah aktif melakukan kegiatan hemat energi';
            }

            var item = '<div class="content-block">' +
                            '<div class="content-block-inner">' +
                                '<h3 align="center">Predikat Anda</h3>' +
                                '<h2 style="color: #3CB371; text-align: center;">' + response + '</h2>' +
                            '</div>' +
                        '</div>';

            $$(page.container).find('#quiz').html(item);
            pos = 0;
            correct = 0;
            return false;
        }

        question = questions[pos][0];
         $$(page.container).find('#question').html(question);

        for(var i = 0; i < questions[pos].length; i++) {
             $$(page.container).find('#choice' + (i+1)).html(questions[pos][i+1]);
        }

    }

    function checkAnswer() {
        console.log("checkAnswer called");
        console.log("before :" +pos);
        choice = $$(page.container).find('input[name="my-radio"]:checked').val();

        if(choice == questions[pos][3]) {
            correct++;
         }

        pos++;
        console.log("after :" +pos);
        renderQuestion();

    }

    if(pos == 0) {
        renderQuestion();
    }

    $$(page.container).find('#submit_btn').click(function() {
        console.log("called twice");
        checkAnswer();
    });

});

    //page part-9 behaviour
$$(document).on('pageInit', '.page[data-page="part-9"]', function(e) {
    var alert_1 = 'mari menghemat konsumsi listrik !';
    var callback_1 = '<p>hemat energi listrik mulai dari diri kita '+
                    'sendiri dengan berlatih menerapkan perilaku '+
                    'menghemat energi listrik guna menjamin ketersediaan '+
                    'listrik di masa depan'+
                    '</p>';
    var callback_2 = '<p>semoga cepat berhemat ya !</p>';

    $$('.open-slider-modal').on('click', function () {
        var modal = myApp.modal({
            title: 'ayo hemat !',
            text: alert_1,

            buttons: [
                {
                    text: 'nanti saja :(',
                    onClick: function () {
                      myApp.alert(callback_2, 'yahh !')
                    }
                },
                {
                    text: 'ayo :)',
                    onClick: function () {
                      myApp.alert(callback_1, 'mari lakukan !')
                    }
                },
            ]
        })
    });
});

    //page part-10 behaviour
$$(document).on('pageInit', '.page[data-page="part-10"', function(e) {
    var mySwiper1 = myApp.swiper('.swiper-1', {
        pagination:'.swiper-1 .swiper-pagination',
        spaceBetween: 50
    });

    var mySwiper2 = myApp.swiper('.swiper-2', {
        pagination:'.swiper-1 .swiper-pagination',
        spaceBetween: 50
    });

    var mySwiper3 = myApp.swiper('.swiper-3', {
        pagination:'.swiper-1 .swiper-pagination',
        spaceBetween: 50
    });
    var mySwiper4 = myApp.swiper('.swiper-4', {
        pagination:'.swiper-1 .swiper-pagination',
        spaceBetween: 50
    });

    $$('#btn-1').on('click', function() {
        $$('#btn-1').addClass('button-fill');
        $$('#btn-2').removeClass('button-fill');
        $$('#btn-3').removeClass('button-fill');
        $$('#btn-4').removeClass('button-fill');
    });

    $$('#btn-2').on('click', function() {
        $$('#btn-1').removeClass('button-fill');
        $$('#btn-2').addClass('button-fill');
        $$('#btn-3').removeClass('button-fill');
        $$('#btn-4').removeClass('button-fill');
    });

    $$('#btn-3').on('click', function() {
        $$('#btn-1').removeClass('button-fill');
        $$('#btn-2').removeClass('button-fill');
        $$('#btn-3').addClass('button-fill');
        $$('#btn-4').removeClass('button-fill');
    });

    $$('#btn-4').on('click', function() {
        $$('#btn-1').removeClass('button-fill');
        $$('#btn-2').removeClass('button-fill');
        $$('#btn-3').removeClass('button-fill');
        $$('#btn-4').addClass('button-fill');
    });

});


