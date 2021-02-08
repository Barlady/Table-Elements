const dataExample = [
    {
        period: '1',
        groop: '1',
        one:  '<b>(H)</b>',
        two: '',
        three: '',
        four: '',
        five: '',
        six: '',
        seven: '<b>H</b> &#8195;&#8195;1 <br> Водород',
        eight: '<b>He</b> &#8195;2 <br> Гелий',
        nine: '',
        ten: ''
    },
    {
        period: '2',
        groop: '2',
        one: '<b>Li </b> &#8195;&#8195;3  <br> Литий',
        two: '<b>Be</b>  &#8195;&#8195;4  <br> Бериллий',
        three: '<b>B</b> &#8195;&#8195;5  <br> Бор',
        four: '<b>С</b> &#8195;&#8195;6  <br> Углерод',
        five: '<b>N</b>&#8195;&#8195;7 <br> Азот',
        six: '<b>O</b>&#8195;&#8195;8 <br>Кислород',
        seven: '<b>F</b> &#8195;&#8195;9  <br> Фтор',
        eight: '<b>Ne</b> &#8195;10  <br> Неон',
        nine: '',
        ten: ''
    },
    {
        period:'3',
        groop:'3',
        one: '<b>Na</b>&#8195;&#8195;11<br> Натрий',
        two: '<b>Mg</b> &#8195;12<br> Магний',
        three: '<b>Al</b> &#8195;&#8195;13  <br> Алюминий',
        four: '<b>Si</b> &#8195;&#8195;14  <br> Кремний',
        five: '<b>P</b>&#8195;&#8195;15 <br> Фосфор',
        six: '<b>S</b>&#8195;&#8195;16<br> Сера',
        seven: '<b>Cl</b> &#8195;&#8195;17  <br> Хлор',
        eight: '<b>Ar</b> &#8195;18  <br> Аргон',
        nine: '',
        ten: ''
    },
    {
        period:'4',
        groop:'4',
        one: '<b>K</b> &#8195;&#8195;19<br> Калий',
        two: '<b>Ca</b>&#8195;&#8195;20  <br> Кальций',
        three: '<b>Sc</b> &#8195;&#8195;21  <br> Скандий',
        four: '<b>Ti</b> &#8195;&#8195;22  <br> Титан',
        five: '<b>V</b>&#8195;&#8195;23 <br> Ванадий',
        six: '<b>Cr</b>&#8195;&#8195;24<br>Хром',
        seven: '<b>Mn</b> &#8195;&#8195;25  <br> Марганец',
        eight: '<b>Fe</b> &#8195;26  <br> Железо',
        nine: '<b>Co</b> &#8195;27  <br> Кобальт',
        ten: '<b>Ni</b> &#8195;28  <br> Никель'
    },
    {
        period:'4',
        groop:'5',
        one: '<b>Cu</b>&#8195;&#8195;29<br> Медь',
        two: '<b>Zn</b>  &#8195;&#8195;30  <br> Цинк',
        three: '<b>Ga</b> &#8195;&#8195;31  <br> Галлий',
        four: '<B>Ge</b> &#8195;&#8195;32  <br> Германий',
        five: '<b>As</b>&#8195;&#8195;33 <br> Мышьяк ',
        six: '<b>Se</b>&#8195;&#8195;34<br>Селен',
        seven: '<b>Br</b> &#8195;&#8195;35  <br> Бром',
        eight: '<b>Kr</b> &#8195;36  <br> Криптон',
        nine: '',
        ten: ''
    },
    { 
        period:'5',
        groop:'6',
        one: '<B>Rb</b>&#8195;&#8195;37<br> Рубидий',
        two: '<B>Sr</b> &#8195;&#8195;38  <br> Стронций',
        three: '<b>Y</b> &#8195;&#8195;39  <br> Иттрий',
        four: '<b>Zr</b> &#8195;&#8195;40  <br> Цирконий',
        five: '<b>Nb</b>&#8195;&#8195;41 <br> Ниобий',
        six: '<b>Mo</b>&#8195;&#8195;42<br>Молибден',
        seven: '<b>Tc</b> &#8195;&#8195;43  <br> Технеций',
        eight: '<b>Ru</b> &#8195;44  <br> Рутений',
        nine: '<b>Rh</b> &#8195;45  <br> Родий',
        ten: '<b>Pd</b> &#8195;46  <br> Палладий'
    },
    {
        period:'5',
        groop:'7',
        one: '<b>Ag</b>&#8195;&#8195;47 <br> Серебро',
        two: '<b>Cd</b> &#8195;&#8195;48  <br> Кадмий',
        three: '<b>In</b> &#8195;&#8195;49  <br> Индий',
        four: '<b>Sn</b> &#8195;&#8195;50  <br> Олово',
        five: '<b>Sb</b>&#8195;&#8195;51 <br> Сурьма',
        six: '<b>Te</b>&#8195;&#8195;52<br>Теллур',
        seven: '<b>I</b> &#8195;&#8195;53  <br> Йод',
        eight: '<b>Xe</b> &#8195;54  <br> Ксенон',
        nine: '',
        ten: ''
    },
    { 
        period:'6',
        groop:'8',
        one: '<B>Cs</b>&#8195;&#8195;55 <br> Цезий',
        two: '<b>Ba</b> &#8195;&#8195;56  <br> Барий',
        three: '<b>La</b> &#8195;&#8195;57  <br> Лантан',
        four: '<b>Hf</b> &#8195;&#8195;72  <br> Гафний',
        five: '<b>Ta</b>&#8195;&#8195;73 <br> Тантал',
        six: '<b>W</b>&#8195;&#8195;74<br>Вольфрам',
        seven: '<b>Re</b> &#8195;75  <br> Рений',
        eight: '<b>Os</b> &#8195;76  <br> Осмий',
        nine: '<b>Ir</b> &#8195;77  <br> Иридий',
        ten: '<b>Pt</b> &#8195;78  <br> Платина'
    },
    {
        period:'6',
        groop:'9',
        one: '<b>Au</b>&#8195;&#8195;79<br> Золото',
        two: '<b>Hg</b> &#8195;&#8195;80  <br> Ртуть',
        three: '<b>Tl</b> &#8195;&#8195;81  <br> Таллий',
        four: '<b>Pb</b> &#8195;&#8195;82  <br> Свинец',
        five: '<b>Bi</b>&#8195;&#8195;83 <br> Висмут',
        six: '<b>Po</b>&#8195;&#8195;84<br>Полоний',
        seven: '<b>At</b> &#8195;&#8195;85  <br> Астат',
        eight: '<b>Rn</b> &#8195;86  <br> Радон',
        nine: '',
        ten: ''
    },
    { 
        period:'7',
        groop:'10',
        one: '<b>Fr</b>&#8195;&#8195;87 <br> Франций',
        two: '<b>Ra</b> &#8195;&#8195;88  <br> Радий',
        three: '<b>Ac</b> &#8195;&#8195;89  <br> Актиний',
        four: '<b>Rf</b> &#8195;104  <br> Разерфордий',
        five: '<b>Db</b>&#8195;105 <br> Дубний',
        six: '<b>Sg</b>&#8195;106<br>Сиборгий',
        seven: '<b>Bh</b> &#8195;107  <br> Борий',
        eight: '<b>Hs</b> &#8195;108  <br> Хассий',
        nine: '<b>Mt</b> &#8195;109  <br> Майтнерий',
        ten: '<b>Ds</b> &#8195;110  <br> Дармштадтий'
    },
    {
        period:'7',
        groop:'11',
        one: '<b>Rg</b>&#8195;111 <br> Рентгений',
        two: '<b>Cn</b> &#8195;112  <br> Коперниций',
        three: '<b>Nh</b> &#8195;113  <br> Нихоний',
        four: '<b>Fl</b> &#8195;114  <br> Флеровий',
        five: '<b>Mc</b>&#8195;115 <br> Московий',
        six: '<b>Lv</b>&#8195;116<br>Ливерморий',
        seven: '<b>Ts</b> &#8195;117  <br> Теннессин',
        eight: '<b>Og</b>&#8195;118 <br> Оганесон',
        nine: '',
        ten: ''
    }
];

let gridView = new GridView();
const data = {
    header: 'Периодическая Таблица Д. И. Менделеева',
    headerClass: ['header', 'site-header'],
    attribute: {
        'period': {
            'label': 'Период',
            // 'value': (data) => {
                // if (data['period'] !== '' && data['period'] === '1') {
                // return data['period'] + 'map';
                //     }
                //     return data['period'];
                //         }

        },
        'groop': {
            'label': 'Ряд',   
        },
        'one': {
            'label': 'I',
            'src': 'html',
            // 'value': (data) => {
            //     if (data['one'] == '<b>(H)</b>' ) {
            //      return  ;
            //         }
            //         return data['one'];
            //             }
            
        },
        'two': {
            'label': 'II',
            'src': 'html',
        },
        'three': {
            'label': 'III',
            'src': 'html',
            // 'value': (data) => {
            //     if (data['country'] === 'Germany') {
            //         return data['country'] + ' map'
            //     }
            //     return data['country'];
            // }
        },
        'four': {
            'label': 'IV',
            'src': 'html',
        },
        'five': {
            'label': 'V',
            'src': 'html',
        },
        'six': {
            'label': 'VI',
            'src': 'html',
        },
        'seven': {
            'label': 'VII',
            'src': 'html',
        },
        'eight': {
            'label': 'VIII',
            'src': 'html',
        },
        'nine': {
            'label': 'VIII',
            'src': 'html',
        }, 
        'ten': {
            'label': 'VIII',
            'src': 'html',
        }
    },
    data: dataExample
}

gridView.render(data);
console.log(gridView);

