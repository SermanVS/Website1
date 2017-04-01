/**
 * Created by Сергей on 01.04.2017.
 */
function setEqualHeight(blocks, etalon, correction) {
    blocks = $(blocks);
    if (blocks.length > 1) { // Проверяем наличие блоков
        var tallest = 0;
        blocks.each(function () { // Проходим по всем блокам и находим самый высокий
            var height = $(this).outerHeight(true);
            if (tallest < height) tallest = height;
        });
        if (etalon && tallest < etalon) { // Сравниваем с эталоном
            result = etalon;
        } else {
            result = tallest;
        }
        if (correction) result = result + correction; // Подгоняем
        blocks.height(result); // Выравниваем
    }
}