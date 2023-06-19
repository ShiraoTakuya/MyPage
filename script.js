document.addEventListener('DOMContentLoaded', function(){
    var dropdown1 = document.querySelector('.header-logo');
    var dropdownMenu1 = document.querySelector('.ninja-line');

    dropdown1.addEventListener('mouseover', function(){
        dropdownMenu1.style.display = 'block';
    });
    dropdown1.addEventListener('mouseout', function(){
        dropdownMenu1.style.display = 'none';
    });

    
    var dropdown2 = document.querySelector('.dropdown-repositories-container');
    var dropdownMenu2 = document.querySelector('.dropdown-repositories-items');

    dropdown2.addEventListener('mouseover', function(){
        dropdownMenu2.style.display = 'block';
    });
    dropdown2.addEventListener('mouseout', function(){
        dropdownMenu2.style.display = 'none';
    });

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
        dropdownMenu2.appendChild(link)
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