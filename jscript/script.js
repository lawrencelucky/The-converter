$(function () {
    // FROM DOLLAR TO OTHER CURRENCIES

    const dollarTo = 1.0;
    const dollarToNaira = 360.00;
    const dollarToPound = 0.76;
    const dollarToEuro = 0.89;

    // FROM NAIRA TO OTHER CURRENCIES

    const nairaTo = 1.0;
    const nairaToDollar = 0.0028;
    const nairaToPound = 0.0021;
    const nairaToEuro = 0.0025;

    // FROM EURO TO OTHER CURRENCIES

    const euroTo = 1.0;
    const euroToNaira = 403.67;
    const euroToDollar = 1.12;
    const euroToPound = 0.86;

    // FROM POUND TO OTHER CURRENCIES

    const poundTo = 1.0;
    const poundToDollar = 1.31;
    const poundToNaira = 472.08;
    const poundToEuro = 1.17;

    let selectedCountryCurrency;
    let selectedCurrency;
    let selectedDay;
    let selectedHour;

    $("#country-currency").change(function () {
        selectedCountryCurrency = $(this).children("option:selected").val();
    });

    // Get currency to convert to

    $("#currency").change(function () {
        selectedCurrency = $(this).children("option:selected").val();
    });

    // Get days of work

    $("#days-of-work").change(function () {
        selectedDay = $(this).children("option:selected").val();
    });

    // Get hours of work

    $("#hours-of-work").change(function () {
        selectedHour = $(this).children("option:selected").val();
    });

    $("#country-currency").change(function () {

        if (selectedCountryCurrency === "Dollar") {

            if (selectedCurrency === "Naira") {
                $("#rate").text(dollarToNaira);
            }

            else if (selectedCurrency === "Dollar") {
                $("#rate").text(dollarTo);
            }

            else if (selectedCurrency === "Pound") {
                $("#rate").text(dollarToPound);
            }

            else if (selectedCurrency === "Euro") {
                $("#rate").text(dollarToEuro);
            }
        }

        else if (selectedCountryCurrency === "Naira") {

            if (selectedCurrency === "Naira") {
                $("#rate").text(nairaTo);
            }

            else if (selectedCurrency === "Dollar") {
                $("#rate").text(dollarToNaira);
            }

            else if (selectedCurrency === "Pound") {
                $("#rate").text(poundToNaira);
            }

            else if (selectedCurrency === "Euro") {
                $("#rate").text(euroToNaira);
            }
        }

        else if (selectedCountryCurrency === "Pound") {

            if (selectedCurrency === "Naira") {
                $("#rate").text(poundToNaira);
            }

            else if (selectedCurrency === "Dollar") {
                $("#rate").text(poundToDollar);
            }

            else if (selectedCurrency === "Pound") {
                $("#rate").text(poundTo);
            }

            else if (selectedCurrency === "Euro") {
                $("#rate").text(poundToEuro);
            }
        }

        else if (selectedCountryCurrency === "Euro") {

            if (selectedCurrency === "Naira") {
                $("#rate").text(euroToNaira);
            }

            else if (selectedCurrency === "Dollar") {
                $("#rate").text(euroToDollar);
            }

            else if (selectedCurrency === "Pound") {
                $("#rate").text(euroToPound);
            }

            else if (selectedCurrency === "Euro") {
                $("#rate").text(euroTo);
            }
        }

        const inputted_salary = parseFloat($("#salary--input").val());
        const resultConvertMonthly = $("#result-convert-monthly");
        const resultConvertWeekly = $("#result-convert-weekly");
        const resultConvertHourly = $("#result-convert-hourly");
        const resultConvertDaily = $("#result-convert-daily");
        const resultMonthly = $("#result-monthly");
        const resultWeekly = $("#result-weekly");
        const day = parseInt(selectedDay);
        const hour = parseInt(selectedHour);

        function calculateAToB(money_sign, aToB) {
            resultConvertMonthly.text(money_sign + ((inputted_salary) * aToB).toFixed(2));
            resultConvertWeekly.text(money_sign + (((inputted_salary / 4).toFixed(2)) * aToB).toFixed(2));
            resultConvertDaily.text(money_sign + ((((inputted_salary / 4) / day).toFixed(2)) * aToB).toFixed(2));
            resultConvertHourly.text(money_sign + (((((inputted_salary / 4) / day) / hour).toFixed(2)) * aToB).toFixed(2));
        }

        function calculate(money_sign) {
            resultMonthly.text(money_sign + inputted_salary);
            resultWeekly.text(money_sign + (inputted_salary / 4).toFixed(2));
        }

        if (selectedCountryCurrency === "Dollar") {
            calculate("USD ");

            switch (selectedCurrency) {
                case "Naira": calculateAToB("NGN ", dollarToNaira); break;
                case "Dollar": calculateAToB("USD ", dollarTo); break;
                case "Pound": calculateAToB("GBP ", dollarToPound); break;
                case "Euro": calculateAToB("EUR ", dollarToEuro); break;
            }
        }
        if (selectedCountryCurrency === "Naira") {
            calculate("NGN ");

            switch (selectedCurrency) {
                case "Dollar": calculateAToB("USD ", nairaToDollar); break;
                case "Naira": calculateAToB("NGN ", nairaTo); break;
                case "Pound": calculateAToB("GBP ", nairaToPound); break;
                case "Euro": calculateAToB("EUR ", nairaToEuro); break;
            }
        }
        if (selectedCountryCurrency === "Euro") {
            calculate("EUR ");

            switch (selectedCurrency) {
                case "Dollar": calculateAToB("USD ", euroToDollar); break;
                case "Naira": calculateAToB("NGN ", euroToNaira); break;
                case "Pound": calculateAToB("GBP ", euroToPound); break;
                case "Euro": calculateAToB("EUR ", euroTo); break;
            }
        }
        if (selectedCountryCurrency === "Pound") {
            calculate("GBP ");

            switch (selectedCurrency) {
                case "Dollar": calculateAToB("USD ", poundToDollar); break;
                case "Naira": calculateAToB("NGN ", poundToNaira); break;
                case "Pound": calculateAToB("GBP ", poundTo); break;
                case "Euro": calculateAToB("EUR ", poundToEuro); break;
            }
        }

        //////

        if (selectedCountryCurrency === "Naira") {
            $(".currencyParagraphOne").text("Naira");
        }

        else if (selectedCountryCurrency === "Pound") {
            $(".currencyParagraphOne").text("Pound");
        }

        else if (selectedCountryCurrency === "Dollar") {
            $(".currencyParagraphOne").text("Dollar");
        }

        else if (selectedCountryCurrency === "Euro") {
            $(".currencyParagraphOne").text("Euro");
        }

        /////

        $("#rateInput").val(" ");
    });

    $("#currency").change(function () {

        if (selectedCurrency === "Naira") {
            $("#rate").text(nairaTo);
        }

        else if (selectedCurrency === "Dollar") {
            $("#rate").text(dollarToNaira);
        }

        else if (selectedCurrency === "Pound") {
            $("#rate").text(poundToNaira);
        }

        else if (selectedCurrency === "Euro") {
            $("#rate").text(euroToNaira);
        }

        if (selectedCountryCurrency === "Dollar") {

            if (selectedCurrency === "Naira") {
                $("#rate").text(dollarToNaira);
            }

            else if (selectedCurrency === "Dollar") {
                $("#rate").text(dollarTo);
            }

            else if (selectedCurrency === "Pound") {
                $("#rate").text(dollarToPound);
            }

            else if (selectedCurrency === "Euro") {
                $("#rate").text(dollarToEuro);
            }
        }

        else if (selectedCountryCurrency === "Naira") {

            if (selectedCurrency === "Naira") {
                $("#rate").text(nairaTo);
            }

            else if (selectedCurrency === "Dollar") {
                $("#rate").text(dollarToNaira);
            }

            else if (selectedCurrency === "Pound") {
                $("#rate").text(poundToNaira);
            }

            else if (selectedCurrency === "Euro") {
                $("#rate").text(euroToNaira);
            }
        }

        else if (selectedCountryCurrency === "Pound") {

            if (selectedCurrency === "Naira") {
                $("#rate").text(poundToNaira);
            }

            else if (selectedCurrency === "Dollar") {
                $("#rate").text(poundToDollar);
            }

            else if (selectedCurrency === "Pound") {
                $("#rate").text(poundTo);
            }

            else if (selectedCurrency === "Euro") {
                $("#rate").text(poundToEuro);
            }
        }

        else if (selectedCountryCurrency === "Euro") {

            if (selectedCurrency === "Naira") {
                $("#rate").text(euroToNaira);
            }

            else if (selectedCurrency === "Dollar") {
                $("#rate").text(euroToDollar);
            }

            else if (selectedCurrency === "Pound") {
                $("#rate").text(euroToPound);
            }

            else if (selectedCurrency === "Euro") {
                $("#rate").text(euroTo);
            }
        }

        const inputted_salary = parseFloat($("#salary--input").val());
        const resultConvertMonthly = $("#result-convert-monthly");
        const resultConvertWeekly = $("#result-convert-weekly");
        const resultConvertHourly = $("#result-convert-hourly");
        const resultConvertDaily = $("#result-convert-daily");
        const resultMonthly = $("#result-monthly");
        const resultWeekly = $("#result-weekly");
        const resultDaily = $("#result-daily");
        const resultHourly = $("#result-hourly");
        const day = parseInt(selectedDay);
        const hour = parseInt(selectedHour);

        function calculateAToB(money_sign, aToB) {
            resultConvertMonthly.text(money_sign + ((inputted_salary) * aToB).toFixed(2));
            resultConvertWeekly.text(money_sign + (((inputted_salary / 4).toFixed(2)) * aToB).toFixed(2));
            resultConvertDaily.text(money_sign + ((((inputted_salary / 4) / day).toFixed(2)) * aToB).toFixed(2));
            resultConvertHourly.text(money_sign + (((((inputted_salary / 4) / day) / hour).toFixed(2)) * aToB).toFixed(2));
        }

        function calculate(money_sign) {
            resultMonthly.text(money_sign + inputted_salary);
            resultWeekly.text(money_sign + (inputted_salary / 4).toFixed(2));
            resultDaily.text(money_sign + ((inputted_salary / 4) / day).toFixed(2));
            resultHourly.text(money_sign + (((inputted_salary / 4) / day) / hour).toFixed(2));
        }

        if (selectedCountryCurrency === "Dollar") {
            calculate("USD ");

            switch (selectedCurrency) {
                case "Naira": calculateAToB("NGN ", dollarToNaira); break;
                case "Dollar": calculateAToB("USD ", dollarTo); break;
                case "Pound": calculateAToB("GBP ", dollarToPound); break;
                case "Euro": calculateAToB("EUR ", dollarToEuro); break;
             }
        }
        if (selectedCountryCurrency === "Naira") {
            calculate("NGN ");

            switch (selectedCurrency) {
                case "Dollar": calculateAToB("USD ", nairaToDollar); break;
                case "Naira": calculateAToB("NGN ", nairaTo); break;
                case "Pound": calculateAToB("GBP ", nairaToPound); break;
                case "Euro": calculateAToB("EUR ", nairaToEuro); break;
            }
        }
        if (selectedCountryCurrency === "Euro") {
            calculate("EUR ");

            switch (selectedCurrency) {
                case "Dollar": calculateAToB("USD ", euroToDollar); break;
                case "Naira": calculateAToB("NGN ", euroToNaira); break;
                case "Pound": calculateAToB("GBP ", euroToPound); break;
                case "Euro": calculateAToB("EUR ", euroTo); break;
            }
        }
        if (selectedCountryCurrency === "Pound") {
            calculate("GBP ");

            switch (selectedCurrency) {
                case "Dollar": calculateAToB("USD ", poundToDollar); break;
                case "Naira": calculateAToB("NGN ", poundToNaira); break;
                case "Pound": calculateAToB("GBP ", poundTo); break;
                case "Euro": calculateAToB("EUR ", poundToEuro); break;
            }
        }

        //////////

        if (selectedCurrency === "Naira") {
            $(".currencyParagraphTwo").text("Naira");
        }

        else if (selectedCurrency === "Dollar") {
            $(".currencyParagraphTwo").text("Dollar");
        }

        else if (selectedCurrency === "Pound") {
            $(".currencyParagraphTwo").text("Pound");
        }

        else if (selectedCurrency === "Euro") {
            $(".currencyParagraphTwo").text("Euro");
        }

        /////////

        $("#rateInput").val(" ");

    });

    $("#salary--input").keyup(function () {

        const inputted_salary = parseFloat($("#salary--input").val());
        const resultConvertMonthly = $("#result-convert-monthly");
        const resultConvertWeekly = $("#result-convert-weekly");
        const resultConvertDaily = $("#result-convert-daily");
        const resultConvertHourly = $("#result-convert-hourly");
        const resultMonthly = $("#result-monthly");
        const resultWeekly = $("#result-weekly");
        // const resultDaily = $("#result-daily");
        // const resultHourly = $("#resultHourly");
        const day = parseInt(selectedDay);
        const hour = parseInt(selectedHour);

        function calculateAToB(money_sign, aToB) {
            resultConvertMonthly.text(money_sign + ((inputted_salary) * aToB).toFixed(2));
            resultConvertWeekly.text(money_sign + (((inputted_salary / 4).toFixed(2)) * aToB).toFixed(2));
            resultConvertDaily.text(money_sign + ((((inputted_salary / 4) / day).toFixed(2)) * aToB).toFixed(2));
            resultConvertHourly.text(money_sign + (((((inputted_salary / 4) / day) / hour).toFixed(2)) * aToB).toFixed(2));
        }

        function calculate(money_sign) {
            resultMonthly.text(money_sign + inputted_salary);
            resultWeekly.text(money_sign + (inputted_salary / 4).toFixed(2));
        }

        if (selectedCountryCurrency === "Dollar") {
            calculate("USD ");

            switch (selectedCurrency) {
                case "Naira": calculateAToB("NGN ", dollarToNaira); break;
                case "Dollar": calculateAToB("USD ", dollarTo); break;
                case "Pound": calculateAToB("GBP ", dollarToPound); break;
                case "Euro": calculateAToB("EUR ", dollarToEuro); break;
            }
        }
        if (selectedCountryCurrency === "Naira") {
            calculate("NGN ");

            switch (selectedCurrency) {
                case "Dollar": calculateAToB("USD ", nairaToDollar); break;
                case "Naira": calculateAToB("NGN ", nairaTo); break;
                case "Pound": calculateAToB("GBP ", nairaToPound); break;
                case "Euro": calculateAToB("EUR ", nairaToEuro); break;
            }
        }
        if (selectedCountryCurrency === "Euro") {
            calculate("EUR ");

            switch (selectedCurrency) {
                case "Dollar": calculateAToB("USD ", euroToDollar); break;
                case "Naira": calculateAToB("NGN ", euroToNaira); break;
                case "Pound": calculateAToB("GBP ", euroToPound); break;
                case "Euro": calculateAToB("EUR ", euroTo); break;
            }
        }
        if (selectedCountryCurrency === "Pound") {
            calculate("GBP ");

            switch (selectedCurrency) {
                case "Dollar": calculateAToB("USD ", poundToDollar); break;
                case "Naira": calculateAToB("NGN ", poundToNaira); break;
                case "Pound": calculateAToB("GBP ", poundTo); break;
                case "Euro": calculateAToB("EUR ", poundToEuro); break;
            }
        }
    });

    $("#days-of-work").change(function () {
        const inputted_salary = parseFloat($("#salary--input").val());
        const day = parseInt(selectedDay);
        const hour = parseInt(selectedHour);
        const resultConvertDaily = $("#result-convert-daily");
        const resultConvertHourly = $("#result-convert-hourly");

        const resultDaily = $("#result-daily");
        const resultHourly = $("#result-hourly");

        function calculateAToB(money_sign, aToB) {
            resultConvertDaily.text(money_sign + ((((inputted_salary / 4) / day).toFixed(2)) * aToB).toFixed(2));
            resultConvertHourly.text(money_sign + (((((inputted_salary / 4) / day) / hour).toFixed(2)) * aToB).toFixed(2));
        }

        function calculate(money_sign) {
            resultDaily.text(money_sign + ((inputted_salary / 4) / day).toFixed(2));
            resultHourly.text(money_sign + (((inputted_salary / 4) / day) / hour).toFixed(2));
        }

        if (selectedCountryCurrency === "Dollar") {
            calculate("USD ");

            switch (selectedCurrency) {
                case "Naira": calculateAToB("NGN ", dollarToNaira); break;
                case "Dollar": calculateAToB("USD ", dollarTo); break;
                case "Pound": calculateAToB("GBP ", dollarToPound); break;
                case "Euro": calculateAToB("EUR ", dollarToEuro); break;
            }
        }
        if (selectedCountryCurrency === "Naira") {
            calculate("NGN ");

            switch (selectedCurrency) {
                case "Dollar": calculateAToB("USD ", nairaToDollar); break;
                case "Naira": calculateAToB("NGN ", nairaTo); break;
                case "Pound": calculateAToB("GBP ", nairaToPound); break;
                case "Euro": calculateAToB("EUR ", nairaToEuro); break;
            }
        }
        if (selectedCountryCurrency === "Euro") {
            calculate("EUR ");

            switch (selectedCurrency) {
                case "Dollar": calculateAToB("USD ", euroToDollar); break;
                case "Naira": calculateAToB("NGN ", euroToNaira); break;
                case "Pound": calculateAToB("GBP ", euroToPound); break;
                case "Euro": calculateAToB("EUR ", euroTo); break;
            }
        }
        if (selectedCountryCurrency === "Pound") {
            calculate("GBP ");

            switch (selectedCurrency) {
                case "Dollar": calculateAToB("USD ", poundToDollar); break;
                case "Naira": calculateAToB("NGN ", poundToNaira); break;
                case "Pound": calculateAToB("GBP ", poundTo); break;
                case "Euro": calculateAToB("EUR ", poundToEuro); break;
            }
        }

        $("#salary--input").keyup(function () {
            const inputted_salary = parseFloat($("#salary--input").val());
            const day = parseInt(selectedDay);
            const hour = parseInt(selectedHour);
            const resultConvertDaily = $("#result-convert-daily");
            const resultDaily = $("#result-daily");
            const resultHourly = $("#result-hourly");
    
            function calculateAToB(money_sign, aToB) {
                resultConvertDaily.text(money_sign + ((((inputted_salary / 4) / day).toFixed(2)) * aToB).toFixed(2));
                resultConvertHourly.text(money_sign + (((((inputted_salary / 4) / day) / hour).toFixed(2)) * aToB).toFixed(2));
            }
    
            function calculate(money_sign) {
                resultDaily.text(money_sign + ((inputted_salary / 4) / day).toFixed(2));
                resultHourly.text(money_sign + (((inputted_salary / 4) / day) / hour).toFixed(2));
            }

            if (selectedCountryCurrency === "Dollar") {
                calculate("USD ");

                switch (selectedCurrency) {
                    case "Naira": calculateAToB("NGN ", dollarToNaira); break;
                    case "Dollar": calculateAToB("USD ", dollarTo); break;
                    case "Pound": calculateAToB("GBP ", dollarToPound); break;
                    case "Euro": calculateAToB("EUR ", dollarToEuro); break;
                }
            }
            if (selectedCountryCurrency === "Naira") {
                calculate("NGN ");

                switch (selectedCurrency) {
                    case "Dollar": calculateAToB("USD ", nairaToDollar); break;
                    case "Naira": calculateAToB("NGN ", nairaTo); break;
                    case "Pound": calculateAToB("GBP ", nairaToPound); break;
                    case "Euro": calculateAToB("EUR ", nairaToEuro); break;
                }
            }
            if (selectedCountryCurrency === "Euro") {
                calculate("EUR ");

                switch (selectedCurrency) {
                    case "Dollar": calculateAToB("USD ", euroToDollar); break;
                    case "Naira": calculateAToB("NGN ", euroToNaira); break;
                    case "Pound": calculateAToB("GBP ", euroToPound); break;
                    case "Euro": calculateAToB("EUR ", euroTo); break;
                }
            }
            if (selectedCountryCurrency === "Pound") {
                calculate("GBP ");

                switch (selectedCurrency) {
                    case "Dollar": calculateAToB("USD ", poundToDollar); break;
                    case "Naira": calculateAToB("NGN ", poundToNaira); break;
                    case "Pound": calculateAToB("GBP ", poundTo); break;
                    case "Euro": calculateAToB("EUR ", poundToEuro); break;
                }
            }
        });

        $("#country-currency").change(function () {
            const inputted_salary = parseFloat($("#salary--input").val());
            const day = parseInt(selectedDay);
            const hour = parseInt(selectedHour);
            const resultConvertDaily = $("#result-convert-daily");
            const resultDaily = $("#result-daily");
            const resultHourly = $("#result-hourly");
    
            function calculateAToB(money_sign, aToB) {
                resultConvertDaily.text(money_sign + ((((inputted_salary / 4) / day).toFixed(2)) * aToB).toFixed(2));
                resultConvertHourly.text(money_sign + (((((inputted_salary / 4) / day) / hour).toFixed(2)) * aToB).toFixed(2));
            }
    
            function calculate(money_sign) {
                resultDaily.text(money_sign + ((inputted_salary / 4) / day).toFixed(2));
                resultHourly.text(money_sign + (((inputted_salary / 4) / day) / hour).toFixed(2));
            }

            if (selectedCountryCurrency === "Dollar") {
                calculate("USD ");

                switch (selectedCurrency) {
                    case "Naira": calculateAToB("NGN ", dollarToNaira); break;
                    case "Dollar": calculateAToB("USD ", dollarTo); break;
                    case "Pound": calculateAToB("GBP ", dollarToPound); break;
                    case "Euro": calculateAToB("EUR ", dollarToEuro); break;
                }
            }
            if (selectedCountryCurrency === "Naira") {
                calculate("NGN ");

                switch (selectedCurrency) {
                    case "Dollar": calculateAToB("USD ", nairaToDollar); break;
                    case "Naira": calculateAToB("NGN ", nairaTo); break;
                    case "Pound": calculateAToB("GBP ", nairaToPound); break;
                    case "Euro": calculateAToB("EUR ", nairaToEuro); break;
                }
            }
            if (selectedCountryCurrency === "Euro") {
                calculate("EUR ");

                switch (selectedCurrency) {
                    case "Dollar": calculateAToB("USD ", euroToDollar); break;
                    case "Naira": calculateAToB("NGN ", euroToNaira); break;
                    case "Pound": calculateAToB("GBP ", euroToPound); break;
                    case "Euro": calculateAToB("EUR ", euroTo); break;
                }
            }
            if (selectedCountryCurrency === "Pound") {
                calculate("GBP ");

                switch (selectedCurrency) {
                    case "Dollar": calculateAToB("USD ", poundToDollar); break;
                    case "Naira": calculateAToB("NGN ", poundToNaira); break;
                    case "Pound": calculateAToB("GBP ", poundTo); break;
                    case "Euro": calculateAToB("EUR ", poundToEuro); break;
                }
            }
        });

    });

    $("#hours-of-work").change(function () {
        const inputted_salary = parseFloat($("#salary--input").val());
        const day = parseInt(selectedDay);
        const hour = parseInt(selectedHour);
        const resultConvertHourly = $("#result-convert-hourly");
        const resultHourly = $("#result-hourly");

        function calculateAToB(money_sign, aToB) {
            resultConvertHourly.text(money_sign + (((((inputted_salary / 4) / day) / hour).toFixed(2)) * aToB).toFixed(2));
        }

        function calculate(money_sign) {
            resultHourly.text(money_sign + (((inputted_salary / 4) / day) / hour).toFixed(2));
        }

        if (selectedCountryCurrency === "Dollar") {
            calculate("USD ");

            switch (selectedCurrency) {
                case "Naira": calculateAToB("NGN ", dollarToNaira); break;
                case "Dollar": calculateAToB("USD ", dollarTo); break;
                case "Pound": calculateAToB("GBP ", dollarToPound); break;
                case "Euro": calculateAToB("EUR ", dollarToEuro); break;
            }
        }
        if (selectedCountryCurrency === "Naira") {
            calculate("NGN ");

            switch (selectedCurrency) {
                case "Dollar": calculateAToB("USD ", nairaToDollar); break;
                case "Naira": calculateAToB("NGN ", nairaTo); break;
                case "Pound": calculateAToB("GBP ", nairaToPound); break;
                case "Euro": calculateAToB("EUR ", nairaToEuro); break;
            }
        }
        if (selectedCountryCurrency === "Euro") {
            calculate("EUR ");

            switch (selectedCurrency) {
                case "Dollar": calculateAToB("USD ", euroToDollar); break;
                case "Naira": calculateAToB("NGN ", euroToNaira); break;
                case "Pound": calculateAToB("GBP ", euroToPound); break;
                case "Euro": calculateAToB("EUR ", euroTo); break;
            }
        }
        if (selectedCountryCurrency === "Pound") {
            calculate("GBP ");

            switch (selectedCurrency) {
                case "Dollar": calculateAToB("USD ", poundToDollar); break;
                case "Naira": calculateAToB("NGN ", poundToNaira); break;
                case "Pound": calculateAToB("GBP ", poundTo); break;
                case "Euro": calculateAToB("EUR ", poundToEuro); break;
            }
        }

        $("#salary--input").keyup(function() {
            const inputted_salary = parseFloat($("#salary--input").val());
            const day = parseInt(selectedDay);
            const hour = parseInt(selectedHour);
            const resultConvertHourly = $("#result-convert-hourly");
            const resultHourly = $("#result-hourly");
    
            function calculateAToB(money_sign, aToB) {
                resultConvertHourly.text(money_sign + (((((inputted_salary / 4) / day) / hour).toFixed(2)) * aToB).toFixed(2));
            }
    
            function calculate(money_sign) {
                resultHourly.text(money_sign + (((inputted_salary / 4) / day) / hour).toFixed(2));
            }
    
            if (selectedCountryCurrency === "Dollar") {
                calculate("USD ");
    
                switch (selectedCurrency) {
                    case "Naira": calculateAToB("NGN ", dollarToNaira); break;
                    case "Dollar": calculateAToB("USD ", dollarTo); break;
                    case "Pound": calculateAToB("GBP ", dollarToPound); break;
                    case "Euro": calculateAToB("EUR ", dollarToEuro); break;
                }
            }
            if (selectedCountryCurrency === "Naira") {
                calculate("NGN ");
    
                switch (selectedCurrency) {
                    case "Dollar": calculateAToB("USD ", nairaToDollar); break;
                    case "Naira": calculateAToB("NGN ", nairaTo); break;
                    case "Pound": calculateAToB("GBP ", nairaToPound); break;
                    case "Euro": calculateAToB("EUR ", nairaToEuro); break;
                }
            }
            if (selectedCountryCurrency === "Euro") {
                calculate("EUR ");
    
                switch (selectedCurrency) {
                    case "Dollar": calculateAToB("USD ", euroToDollar); break;
                    case "Naira": calculateAToB("NGN ", euroToNaira); break;
                    case "Pound": calculateAToB("GBP ", euroToPound); break;
                    case "Euro": calculateAToB("EUR ", euroTo); break;
                }
            }
            if (selectedCountryCurrency === "Pound") {
                calculate("GBP ");
    
                switch (selectedCurrency) {
                    case "Dollar": calculateAToB("USD ", poundToDollar); break;
                    case "Naira": calculateAToB("NGN ", poundToNaira); break;
                    case "Pound": calculateAToB("GBP ", poundTo); break;
                    case "Euro": calculateAToB("EUR ", poundToEuro); break;
                }
            }
        });

        $("#country-currency").change(function() {
            const inputted_salary = parseFloat($("#salary--input").val());
            const day = parseInt(selectedDay);
            const hour = parseInt(selectedHour);
            const resultConvertHourly = $("#result-convert-hourly");
            const resultHourly = $("#result-hourly");
    
            function calculateAToB(money_sign, aToB) {
                resultConvertHourly.text(money_sign + (((((inputted_salary / 4) / day) / hour).toFixed(2)) * aToB).toFixed(2));
            }
    
            function calculate(money_sign) {
                resultHourly.text(money_sign + (((inputted_salary / 4) / day) / hour).toFixed(2));
            }
    
            if (selectedCountryCurrency === "Dollar") {
                calculate("USD ");
    
                switch (selectedCurrency) {
                    case "Naira": calculateAToB("NGN ", dollarToNaira); break;
                    case "Dollar": calculateAToB("USD ", dollarTo); break;
                    case "Pound": calculateAToB("GBP ", dollarToPound); break;
                    case "Euro": calculateAToB("EUR ", dollarToEuro); break;
                }
            }
            if (selectedCountryCurrency === "Naira") {
                calculate("NGN ");
    
                switch (selectedCurrency) {
                    case "Dollar": calculateAToB("USD ", nairaToDollar); break;
                    case "Naira": calculateAToB("NGN ", nairaTo); break;
                    case "Pound": calculateAToB("GBP ", nairaToPound); break;
                    case "Euro": calculateAToB("EUR ", nairaToEuro); break;
                }
            }
            if (selectedCountryCurrency === "Euro") {
                calculate("EUR ");
    
                switch (selectedCurrency) {
                    case "Dollar": calculateAToB("USD ", euroToDollar); break;
                    case "Naira": calculateAToB("NGN ", euroToNaira); break;
                    case "Pound": calculateAToB("GBP ", euroToPound); break;
                    case "Euro": calculateAToB("EUR ", euroTo); break;
                }
            }
            if (selectedCountryCurrency === "Pound") {
                calculate("GBP ");
    
                switch (selectedCurrency) {
                    case "Dollar": calculateAToB("USD ", poundToDollar); break;
                    case "Naira": calculateAToB("NGN ", poundToNaira); break;
                    case "Pound": calculateAToB("GBP ", poundTo); break;
                    case "Euro": calculateAToB("EUR ", poundToEuro); break;
                }
            }
        });
    });

    $("#rateInput").keyup(function () {
        const inputted_salary = parseFloat($("#salary--input").val());
        const inputted_rate = parseFloat($("#rateInput").val());
        const resultConvertMonthly = $("#result-convert-monthly");
        const resultConvertWeekly = $("#result-convert-weekly");
        const resultConvertDaily = $("#result-convert-daily");
        const resultConvertHourly = $("#result-convert-hourly");
        const day = parseInt(selectedDay);
        const hour = parseInt(selectedHour);

        function calculateRate(money_sign) {
            resultConvertMonthly.text(money_sign + ((inputted_salary) * inputted_rate).toFixed(2));
            resultConvertWeekly.text(money_sign + (((inputted_salary / 4).toFixed(2)) * inputted_rate).toFixed(2));
            resultConvertDaily.text(money_sign + ((((inputted_salary / 4) / day).toFixed(2)) * inputted_rate).toFixed(2));
            resultConvertHourly.text(money_sign + (((((inputted_salary / 4) / day) / hour).toFixed(2)) * inputted_rate).toFixed(2));
        }

        if (selectedCountryCurrency === "Dollar") {
            calculateRate("USD ");

            switch (selectedCurrency) {
                case "Naira": calculateRate("NGN "); break;
                case "Dollar": calculateRate("USD "); break;
                case "Pound": calculateRate("GBP "); break;
                case "Euro": calculateRate("EUR "); break;
            }
        }
        if (selectedCountryCurrency === "Naira") {
            calculateRate("NGN ");

            switch (selectedCurrency) {
                case "Dollar": calculateRate("USD "); break;
                case "Naira": calculateRate("NGN "); break;
                case "Pound": calculateRate("GBP "); break;
                case "Euro": calculateRate("EUR "); break;
            }
        }
        if (selectedCountryCurrency === "Euro") {
            calculateRate("EUR ");

            switch (selectedCurrency) {
                case "Dollar": calculateRate("USD "); break;
                case "Naira": calculateRate("NGN "); break;
                case "Pound": calculateRate("GBP "); break;
                case "Euro": calculateRate("EUR "); break;
            }
        }
        if (selectedCountryCurrency === "Pound") {
            calculateRate("GBP ");

            switch (selectedCurrency) {
                case "Dollar": calculateRate("USD "); break;
                case "Naira": calculateRate("NGN "); break;
                case "Pound": calculateRate("GBP "); break;
                case "Euro": calculateRate("EUR "); break;
            }
        }
    });
});