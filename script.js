document.addEventListener('DOMContentLoaded', function(){
    var dropdown1 = document.querySelector('.header-logo');
    var dropdownMenu1 = document.querySelector('.header-ninja-line');

    // HEADER挨拶
    dropdown1.addEventListener('mouseover', function(){
        dropdownMenu1.style.display = 'block';
    });
    dropdown1.addEventListener('mouseout', function(){
        dropdownMenu1.style.display = 'none';
    });

    // リポジトリ登録
    var dropdown2 = document.querySelector('.dropdown-repositories-container');
    var dropdownMenu2 = document.querySelector('.dropdown-repositories-items');
    var arrrep = [
        ["Kotlin","Browse-with-regular-expression","https://github.com/ShiraoTakuya/Browse-with-regular-expression"],
        ["PHP","Inventory-inquiry-system","https://github.com/ShiraoTakuya/Inventory-inquiry-system"],
        ["PHP","FileTransfer","https://github.com/ShiraoTakuya/PHP_Repositories/tree/main/FileTransfer"],
        ["PHP","TodoList","https://github.com/ShiraoTakuya/PHP_Repositories/tree/main/TodoList"],
        ["PHP","VideoPlayerWithResumefunction","https://github.com/ShiraoTakuya/PHP_Repositories/tree/main/VideoPlayerWithResumefunction"],
        ["C#","AllCalculationPattern","https://github.com/ShiraoTakuya/Csharp_Repositories/tree/main/AllCalculationPattern"],
        ["C#","FastFourierTransform","https://github.com/ShiraoTakuya/Csharp_Repositories/tree/main/FastFourierTransform"],
        ["C#","RegularExpressionExtractionOfAll","https://github.com/ShiraoTakuya/Csharp_Repositories/tree/main/RegularExpressionExtractionOfAll"],
        ["C#","RegularExpressionSubstitutionOfAll","https://github.com/ShiraoTakuya/Csharp_Repositories/tree/main/RegularExpressionSubstitutionOfAll"],
        ["C#","TakeScreenshotContinuously","https://github.com/ShiraoTakuya/Csharp_Repositories/tree/main/TakeScreenshotContinuously"],
        ["Ruby","CreatePassword","https://github.com/ShiraoTakuya/Ruby_Repositories/tree/main/CreatePassword"],
        ["Ruby","ForStudyingEnglish","https://github.com/ShiraoTakuya/Ruby_Repositories/tree/main/ForStudyingEnglish"],
        ["Ruby","HierarchyToHashDatabase","https://github.com/ShiraoTakuya/Ruby_Repositories/tree/main/HierarchyToHashDatabase"],
        ["Ruby","HyperDimensionalArray","https://github.com/ShiraoTakuya/Ruby_Repositories/tree/main/HyperDimensionalArray"],
        ["Ruby","ReadExcel","https://github.com/ShiraoTakuya/Ruby_Repositories/tree/main/ReadExcel"],
        ["Ruby","ReadWord","https://github.com/ShiraoTakuya/Ruby_Repositories/tree/main/ReadWord"],
        ["Python","ChatGPTEach","https://github.com/ShiraoTakuya/ChatGPTEach"],
        ["Python","ChatGPTChat","https://github.com/ShiraoTakuya/ChatGPTChat"],
        ["Python","ElectricSimulationFromVoltage_3D","https://github.com/ShiraoTakuya/Python_Repositories/tree/main/ElectricSimulationFromVoltage_3D"],
        ["Python","ElectricSimulationFromVoltage_3D_CuPy","https://github.com/ShiraoTakuya/Python_Repositories/tree/main/ElectricSimulationFromVoltage_3D_CuPy"],
        ["Python","GraphWithExcelSheet","https://github.com/ShiraoTakuya/Python_Repositories/tree/main/GraphWithExcelSheet"],
        ["Python","HashCalc","https://github.com/ShiraoTakuya/Python_Repositories/tree/main/HashCalc"],
        ["Python","MicWaveAndSpectrum","https://github.com/ShiraoTakuya/Python_Repositories/tree/main/MicWaveAndSpectrum"],
        ["Python","Oscilloscope","https://github.com/ShiraoTakuya/Python_Repositories/tree/main/Oscilloscope"],
        ["Python","ScrapingAndFaceExtraction","https://github.com/ShiraoTakuya/Python_Repositories/tree/main/ScrapingAndFaceExtraction"],
        ["Python","ScreenshotWithFaceDetection","https://github.com/ShiraoTakuya/Python_Repositories/tree/main/ScreenshotWithFaceDetection"],
        ["Python","VideoEditing","https://github.com/ShiraoTakuya/Python_Repositories/tree/main/VideoEditing"],
        ["Python","VideoToRGBGraph","https://github.com/ShiraoTakuya/Python_Repositories/tree/main/VideoToRGBGraph"],
        ["Python","WebCameraAndMic","https://github.com/ShiraoTakuya/Python_Repositories/tree/main/WebCameraAndMic"],
        ["Python","WebCameraWithFaceDetection","https://github.com/ShiraoTakuya/Python_Repositories/tree/main/WebCameraWithFaceDetection"],
        ["Python","WebCameraWithFaceDetectionAndDLIB","https://github.com/ShiraoTakuya/Python_Repositories/tree/main/WebCameraWithFaceDetectionAndDLIB"],
        ["Python","二元配置分散分析","https://github.com/ShiraoTakuya/Python_Repositories/tree/main/%E4%BA%8C%E5%85%83%E9%85%8D%E7%BD%AE%E5%88%86%E6%95%A3%E5%88%86%E6%9E%90"],
        ["C","MultiNetLineReceiver","https://github.com/ShiraoTakuya/C_Repositories/tree/main/MultiNetLineReceiver"],
        ["Deepleaning","FunctionalParameterLearning","https://github.com/ShiraoTakuya/Deeplearning_Repositories/tree/main/FunctionalParameterLearning"],
        ["Deepleaning","MakeMeToAI","https://github.com/ShiraoTakuya/Deeplearning_Repositories/tree/main/MakeMeToAI"],
        ["Javascript","Fourier_transform","https://github.com/ShiraoTakuya/JavaScript_Repositories/tree/main/Fourier_transform"],
        ["Javascript","TimeOfCountry","https://github.com/ShiraoTakuya/TimeOfCountry"],
    ]
    for(const arrep of arrrep){
        var link = document.createElement('a');
        link.textContent = arrep[0] + ": " + arrep[1];
        link.href = arrep[2];
        link.target = "_blank";
        dropdownMenu2.appendChild(link)
    }

    // FOOTER挨拶
    var dropdown3 = document.querySelector('.footer-logo');
    var dropdownMenu3 = document.querySelector('.footer-ninja-line');
    dropdown3.addEventListener('mouseover', function(){
        dropdownMenu3.style.display = 'block';
    });
    dropdown3.addEventListener('mouseout', function(){
        dropdownMenu3.style.display = 'none';
    });

    // TOP画像アニメーション
    var i = 0;
    var topimg1 = document.querySelector('.top-img-1');
    var artopimgposition = [0,0.00020202,0.000606061,0.001212121,0.002020202,0.003030303,0.004242424,0.005656566,0.007272727,0.009090909,0.011111111,0.013333333,0.015757576,0.018383838,0.021212121,0.024242424,0.027474747,0.030909091,0.034545455,0.038383838,0.042424242,0.046666667,0.051111111,0.055757576,0.060606061,0.065656566,0.070909091,0.076363636,0.082020202,0.087878788,0.093939394,0.10020202,0.106666667,0.113333333,0.12020202,0.127272727,0.134545455,0.142020202,0.14969697,0.157575758,0.165656566,0.173939394,0.182424242,0.191111111,0.2,0.209090909,0.218383838,0.227878788,0.237575758,0.247474747,0.257575758,0.267878788,0.278383838,0.289090909,0.3,0.311111111,0.322424242,0.333939394,0.345656566,0.357575758,0.36969697,0.382020202,0.394545455,0.407272727,0.42020202,0.433333333,0.446666667,0.46020202,0.473939394,0.487878788,0.502020202,0.516363636,0.530909091,0.545656566,0.560606061,0.575757576,0.591111111,0.606666667,0.622424242,0.638383838,0.654545455,0.670909091,0.687474747,0.704242424,0.721212121,0.738383838,0.755757576,0.773333333,0.791111111,0.809090909,0.827272727,0.845656566,0.864242424,0.883030303,0.902020202,0.921212121,0.940606061,0.96020202,0.98,1,0.98989899,0.98,0.97030303,0.960808081,0.951515152,0.942424242,0.933535354,0.924848485,0.916363636,0.908080808,0.9,0.892121212,0.884444444,0.876969697,0.86969697,0.862626263,0.855757576,0.849090909,0.842626263,0.836363636,0.83030303,0.824444444,0.818787879,0.813333333,0.808080808,0.803030303,0.798181818,0.793535354,0.789090909,0.784848485,0.780808081,0.776969697,0.773333333,0.76989899,0.766666667,0.763636364,0.760808081,0.758181818,0.755757576,0.753535354,0.751515152,0.74969697,0.748080808,0.746666667,0.745454545,0.744444444,0.743636364,0.743030303,0.742626263,0.742424242,0.742424242,0.742626263,0.743030303,0.743636364,0.744444444,0.745454545,0.746666667,0.748080808,0.74969697,0.751515152,0.753535354,0.755757576,0.758181818,0.760808081,0.763636364,0.766666667,0.76989899,0.773333333,0.776969697,0.780808081,0.784848485,0.789090909,0.793535354,0.798181818,0.803030303,0.808080808,0.813333333,0.818787879,0.824444444,0.83030303,0.836363636,0.842626263,0.849090909,0.855757576,0.862626263,0.86969697,0.876969697,0.884444444,0.892121212,0.9,0.908080808,0.916363636,0.924848485,0.933535354,0.942424242,0.951515152,0.960808081,0.97030303,0.98,0.98989899,1,0.994949495,0.99010101,0.985454545,0.981010101,0.976767677,0.972727273,0.968888889,0.965252525,0.961818182,0.958585859,0.955555556,0.952727273,0.95010101,0.947676768,0.945454545,0.943434343,0.941616162,0.94,0.938585859,0.937373737,0.936363636,0.935555556,0.934949495,0.934545455,0.934343434,0.934343434,0.934545455,0.934949495,0.935555556,0.936363636,0.937373737,0.938585859,0.94,0.941616162,0.943434343,0.945454545,0.947676768,0.95010101,0.952727273,0.955555556,0.958585859,0.961818182,0.965252525,0.968888889,0.972727273,0.976767677,0.981010101,0.985454545,0.99010101,0.994949495,1,0.997474747,0.995151515,0.993030303,0.991111111,0.989393939,0.987878788,0.986565657,0.985454545,0.984545455,0.983838384,0.983333333,0.983030303,0.982929293,0.983030303,0.983333333,0.983838384,0.984545455,0.985454545,0.986565657,0.987878788,0.989393939,0.991111111,0.993030303,0.995151515,0.997474747,1,0.998737374,0.997676768,0.996818182,0.996161616,0.995707071,0.995454545,0.99540404,0.995555556,0.995909091,0.996464646,0.997222222,0.998181818,0.999343434,0.998762626,0.998383838,0.998207071,0.998232323,0.998459596,0.998888889,0.999520202,1,]
    topimg1.style.top = -2*topimg1.height + "px";
    topimg1.style.visibility = "visible";
    var hit_edge = setInterval(topimg1_animation, 10);
    function topimg1_animation() {
        if (i < artopimgposition.length) {
            topimg1.style.top = (-2*topimg1.height + topimg1.height*2*artopimgposition[i]) + "px";
            i++;
        } else {
            clearInterval(hit_edge);
        }
    }
});

$(function () {
    $('#js-slider-1').slick({
      arrows: true,
      dots: false,
      speed: 500,
      slidesToShow: 1,
      centerMode: true,
      variableWidth: true,
      autoplay: true,
      autoplaySpeed: 3000,
    });
});