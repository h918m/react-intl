ReactIntlMixin.__addLocaleData({"locale":"pl","pluralRuleFunction":function (n) {var i=Math.floor(Math.abs(n)),v=n.toString().replace(/^[^.]*\.?/,"").length;n=Math.floor(n);if(i===1&&v===0)return"one";if(v===0&&i%10>=2&&i%10<=4&&!(i%100>=12&&i%100<=14))return"few";if(v===0&&(i!==1)&&(i%10>=0&&i%10<=1||v===0&&(i%10>=5&&i%10<=9||v===0&&i%100>=12&&i%100<=14)))return"many";return"other";},"fields":{"second":{"displayName":"sekunda","relative":{"0":"teraz"},"relativeTime":{"future":{"one":"Za {0} sekundę","few":"Za {0} sekundy","many":"Za {0} sekund","other":"Za {0} sekundy"},"past":{"one":"{0} sekundę temu","few":"{0} sekundy temu","many":"{0} sekund temu","other":"{0} sekundy temu"}}},"minute":{"displayName":"minuta","relativeTime":{"future":{"one":"Za {0} minutę","few":"Za {0} minuty","many":"Za {0} minut","other":"Za {0} minuty"},"past":{"one":"{0} minutę temu","few":"{0} minuty temu","many":"{0} minut temu","other":"{0} minuty temu"}}},"hour":{"displayName":"godzina","relativeTime":{"future":{"one":"Za {0} godzinę","few":"Za {0} godziny","many":"Za {0} godzin","other":"Za {0} godziny"},"past":{"one":"{0} godzinę temu","few":"{0} godziny temu","many":"{0} godzin temu","other":"{0} godziny temu"}}},"day":{"displayName":"dzień","relative":{"0":"dzisiaj","1":"jutro","2":"pojutrze","-2":"przedwczoraj","-1":"wczoraj"},"relativeTime":{"future":{"one":"Za {0} dzień","few":"Za {0} dni","many":"Za {0} dni","other":"Za {0} dnia"},"past":{"one":"{0} dzień temu","few":"{0} dni temu","many":"{0} dni temu","other":"{0} dnia temu"}}},"month":{"displayName":"miesiąc","relative":{"0":"w tym miesiącu","1":"w przyszłym miesiącu","-1":"w zeszłym miesiącu"},"relativeTime":{"future":{"one":"Za {0} miesiąc","few":"Za {0} miesiące","many":"Za {0} miesięcy","other":"Za {0} miesiąca"},"past":{"one":"{0} miesiąc temu","few":"{0} miesiące temu","many":"{0} miesięcy temu","other":"{0} miesiąca temu"}}},"year":{"displayName":"rok","relative":{"0":"w tym roku","1":"w przyszłym roku","-1":"w zeszłym roku"},"relativeTime":{"future":{"one":"Za {0} rok","few":"Za {0} lata","many":"Za {0} lat","other":"Za {0} roku"},"past":{"one":"{0} rok temu","few":"{0} lata temu","many":"{0} lat temu","other":"{0} roku temu"}}}}});