// maps
const map = L.map('map').setView([25.7, 32.6], 10);

// light mode 
// OpenStreetMap
// L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
//     attribution: '© OpenStreetMap contributors'
// }).addTo(map);


// dark mode 
const darkBase = L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
    attribution: '&copy; <a href="https://carto.com/">CartoDB</a>',
    subdomains: 'abcd',
    maxZoom: 19
}).addTo(map);




// Filter
function filterTemples() {
    const search = document.getElementById("searchInput").value.trim().toLowerCase();
    const filtered = templesData.filter(t =>
        t.name.toLowerCase().includes(search) || t.type.toLowerCase().includes(search)
    );

    showTemples(filtered);
}

// Reset Filter
function resetFilter() {
    document.getElementById("searchInput").value = '';
    showTemples(templesData);
}

// تشغيل الفلترة فقط عند الضغط على Enter
document.getElementById("searchInput").addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        filterTemples();
    }
});




// API المعالم 
const templesData = [
    // آثار إسلامية
    {
        name: "مسجد سيدى أبو الحجاج",
        coordinates: [25.6990, 32.6385],
        image: "imgs/مسجد سيدى أبو الحجاج.PNG",
        type: "آثار إسلامية",
        geohazardImpact: 4
    },
    {
        name: "مسجد المقشقش",
        coordinates: [25.7010, 32.6410],
        image: "imgs/مسجد المقشقش.PNG",
        type: "آثار إسلامية",
        geohazardImpact: 3
    },
    {
        name: "مسجد السيد على القرافي",
        coordinates: [25.6980, 32.6425],
        image: "imgs/مسجد السيد على القرافي.PNG",
        type: "آثار إسلامية",
        geohazardImpact: 3
    },
    {
        name: "مسجد يوسف الحجاجي",
        coordinates: [25.7055, 32.6400],
        image: "imgs/مسجد يوسف الحجاجي.PNG",
        type: "آثار إسلامية",
        geohazardImpact: 3
    },
    {
        name: "مسجد عوض الحامدي",
        coordinates: [25.7030, 32.6390],
        image: "imgs/awad_hamdi.jpg",
        type: "آثار إسلامية",
        geohazardImpact: 2
    },
    {
        name: "المسجد العتيق",
        coordinates: [25.7100, 32.6370],
        image: "imgs/al_ateeq_mosque.jpg",
        type: "آثار إسلامية",
        geohazardImpact: 4
    },
    {
        name: "مسجد السلايمة",
        coordinates: [25.7120, 32.6335],
        image: "imgs/sulaima_mosque.jpg",
        type: "آثار إسلامية",
        geohazardImpact: 3
    },
    {
        name: "مسجد آل حزين",
        coordinates: [25.7060, 32.6350],
        image: "imgs/al_hazeen_mosque.jpg",
        type: "آثار إسلامية",
        geohazardImpact: 3
    },
    {
        name: "مسجد الصاوى",
        coordinates: [25.7105, 32.6345],
        image: "imgs/sawi_mosque.jpg",
        type: "آثار إسلامية",
        geohazardImpact: 4
    },

    // آثار قبطية
    {
        name: "دير الشايب",
        coordinates: [25.7360, 32.6210],
        image: "imgs/der_elshaib.jpg",
        type: "آثار قبطية",
        geohazardImpact: 3
    },
    {
        name: "دير الشهيد تادروس",
        coordinates: [25.7255, 32.6150],
        image: "imgs/der_shahid_tadros.jpg",
        type: "آثار قبطية",
        geohazardImpact: 3
    },
    {
        name: "دير القديس متاؤؤس",
        coordinates: [25.7180, 32.6135],
        image: "imgs/der_metawos.jpg",
        type: "آثار قبطية",
        geohazardImpact: 4
    },
    {
        name: "دير ماری جرجس",
        coordinates: [25.7125, 32.6075],
        image: "imgs/der_mar_gerges.jpg",
        type: "آثار قبطية",
        geohazardImpact: 4
    },
    {
        name: "دير القديسين",
        coordinates: [25.7105, 32.6025],
        image: "imgs/der_saint.jpg",
        type: "آثار قبطية",
        geohazardImpact: 4
    },
    {
        name: "کنیسه الام دولای",
        coordinates: [25.7035, 32.5975],
        image: "imgs/church_om_dolay.jpg",
        type: "آثار قبطية",
        geohazardImpact: 3
    },
    {
        name: "مزار الشهيد ونس",
        coordinates: [25.7025, 32.5950],
        image: "imgs/mazar_wanas.jpg",
        type: "آثار قبطية",
        geohazardImpact: 3
    },
    {
        name: "دير الشهداء",
        coordinates: [25.7000, 32.5910],
        image: "imgs/der_shohada.jpg",
        type: "آثار قبطية",
        geohazardImpact: 3
    },

    // آثار مصرية قديمة
    {
        name: "معبد المدامود",
        coordinates: [25.8130, 32.6010],
        image: "imgs/madmod_temple.jpg",
        type: "آثار مصرية قديمة",
        geohazardImpact: 5
    },
    {
        name: "مقابر العضايمة",
        coordinates: [25.8220, 32.6035],
        image: "imgs/azayma_tomb.jpg",
        type: "آثار مصرية قديمة",
        geohazardImpact: 4
    },
    {
        name: "تمثالا ممنون",
        coordinates: [25.7110, 32.5900],
        image: "imgs/تمثالا ممنون.PNG",
        type: "آثار مصرية قديمة",
        geohazardImpact: 3
    },
    {
        name: "معبد إسنا",
        coordinates: [25.2650, 32.5515],
        image: "imgs/معبد اسنا.PNG",
        type: "آثار مصرية قديمة",
        geohazardImpact: 6
    },
    {
        name: "معبد أرمنت",
        coordinates: [25.5655, 32.7565],
        image: "imgs/ارمنت.jpg",
        type: "آثار مصرية قديمة",
        geohazardImpact: 7
    },
    {
        name: "مقابر ذراع أبو النجا",
        coordinates: [25.7320, 32.6095],
        image: "imgs/ذراع ابو النجا.jpg",
        type: "آثار مصرية قديمة",
        geohazardImpact: 5
    },
    {
        name: "معبد الرمسيوم",
        coordinates: [25.7332, 32.6014],
        image: "imgs/رامسوم.PNG",
        type: "آثار مصرية قديمة",
        geohazardImpact: 7
    },
    {
        name: "مقابر وادى الملكات",
        coordinates: [25.7440, 32.6055],
        image: "imgs/وادى الملكات.PNG",
        type: "آثار مصرية قديمة",
        geohazardImpact: 4
    },
    {
        name: "مقابر دير المدينة",
        coordinates: [25.7395, 32.6070],
        image: "imgs/دير المدينة.PNG",
        type: "آثار مصرية قديمة",
        geohazardImpact: 5
    },
    {
        name: "مقابر وادى الملوك",
        coordinates: [25.7400, 32.6010],
        image: "imgs/وادى الملوك.PNG",
        type: "آثار مصرية قديمة",
        geohazardImpact: 6
    },
    {
        name: "معبد هابو",
        coordinates: [25.7020, 32.6015],
        image: "imgs/هابو.PNG",
        type: "آثار مصرية قديمة",
        geohazardImpact: 5
    },
    {
        name: "معبد الدير البحرى",
        coordinates: [25.7065, 32.6010],
        image: "imgs/الدير البحرى.PNG",
        type: "آثار مصرية قديمة",
        geohazardImpact: 8
    },
    {
        name: "معبد الكرنك",
        coordinates: [25.7188, 32.6573],
        image: "imgs/الكرنك.jpg",
        type: "آثار مصرية قديمة",
        geohazardImpact: 5
    },
    {
        name: "معبد الأقصر",
        coordinates: [25.6996, 32.6396],
        image: "imgs/معبد الاقصر.jpg",
        type: "آثار مصرية قديمة",
        geohazardImpact: 5
    },
    {
        name: "مقابر الأشراف",
        coordinates: [25.7300, 32.6080],
        image: "imgs/nobles_tombs.jpg",
        type: "آثار مصرية قديمة",
        geohazardImpact: 6
    }
];


const BarChartData = [
    {
        name: "الكرنك",
        geohazardImpact: 8,
        description: "يعاني من ارتفاع منسوب المياه الجوفية، مما أدى إلى غمر أجزاء من قواعد الأعمدة وتأثير على النقوش والألوان."
    },
    {
        name: "الأقصر",
        geohazardImpact: 7,
        description: "تأثر بارتفاع المياه الجوفية، حيث غمرت المياه أجزاء من المعبد، مما أثر على النقوش والألوان."
    },
    {
        name: "هابو",
        geohazardImpact: 6,
        description: "يتعرض لتأثيرات سلبية بسبب التغيرات المناخية، مثل تآكل الأحجار نتيجة الرطوبة والتلوث."
    },
    {
        name: " سيتي الأول",
        geohazardImpact: 9,
        description: "في عام 1994، تحول إلى بحيرة بسبب الأمطار الغزيرة، مما أدى إلى أضرار كبيرة."
    },
    {
        name: "مقابرالملوك",
        geohazardImpact: 10,
        description: "مهددة بالاختفاء خلال قرن بسبب التغيرات المناخية، حيث تظهر بعض الأحجار تآكلاً نتيجة الرطوبة."
    }
];

//   pop up
let templesLayer = L.layerGroup();
function showTemples(data) {

    templesLayer.clearLayers();

    data.forEach(t => {
        const marker = L.marker([t.coordinates[0], t.coordinates[1]]).addTo(templesLayer); // إضافة المعابد
        marker.bindPopup(`<strong>${t.name}</strong><br><img src="${t.image}" style="width:150px; border-radius:8px;"><br>نوع الأثر: ${t.type}`);
    });

    templesLayer.addTo(map);
}
showTemples(templesData);





// Hit map
const heatData = templesData.map(t => [...t.coordinates, t.danger / 10]);
const heatLayer = L.heatLayer(heatData, {
    radius: 30,
    blur: 20,
    maxZoom: 50,
    gradient: {
        0.2: 'blue',
        0.4: 'lime',
        0.6: 'orange',
        0.8: 'red'
    }
});




//Luxor & soilLayer 

let soilLayer;
fetch('data/Export_soilt.json')

    .then(res => res.json())
    .then(soilData => {

        /////////// soil Layer
        soilLayer = L.geoJSON(soilData, {
            style: f => ({
                color: 'black',
                weight: 1,
                fillColor: soilColor(f.properties.Soil_Type_),
                fillOpacity: 0.5
            }),

            onEachFeature: (f, layer) => {
                layer.bindPopup(`🧱 نوع التربة: ${f.properties.Soil_Type_}`);
            }

        });



        /////////// Luxor Layer
        fetch('data/Luxor_Outline1.json')
            .then(res => res.json())
            .then(luxorData => {

                const luxorAreaLayer = L.geoJSON(luxorData, {
                    style: {
                        color: 'white',
                        weight: 1,
                        fillOpacity: 0.2
                    },
                    onEachFeature: (f, layer) => {
                        layer.bindPopup(`📍 منطقة الأقصر  `);
                    }
                });

                //  إضافة كل الطبقات إلى شريط التحكم في الخريطة
                const overlays = {
                     "منطقة الأقصر": luxorAreaLayer,
                    "معابد": templesLayer,
                    "تربة": soilLayer,
                    "خريطة الحرارة": heatLayer,
                    "اتجاهات الرياح": windLayer
                };


                // إضافة شريط التحكم بالطبقات
                L.control.layers({}, overlays).addTo(map);
            });
});



// soil color
function soilColor(type) {
    switch (type) {

        case 'تربة الرواسب النهرية':
            return '#6C4F3D';

        case 'تربة صخرية':
            return '#B87333';

        case 'تربة وحصاوية غنية':
            return '#8B4D33';

        default:
            return '#D3D3D3';

    }
}


 

// wind icon
const arrowIcon = L.icon({
    iconUrl: 'imgs/arrw2.png',
    iconSize: [30, 30],
    iconAnchor: [15, 15],
});

// wind layer
let windLayer = L.layerGroup(); 
fetch('data/Luxor_Outline1.json')
    .then(res => res.json())
    .then(luxorData => {
        // إنشاء مضلع للاقصر
        const luxorPolygon = L.geoJSON(luxorData);

        fetch('data/wind.csv')
            .then(response => response.text())
            .then(csvText => {
                const parsed = Papa.parse(csvText, { header: true, dynamicTyping: true, skipEmptyLines: true });
                const windData = parsed.data;

                windData.forEach(point => {
                    if (point.LAT && point.LON && point.speed && point.direction) {
                        // نتحقق إذا النقطة داخل حدود الأقصر
                        if (luxorPolygon.getLayers()[0].getBounds().contains([point.LAT, point.LON])) {
                            // إضافة العلامة كما سابقًا
                            // تعريف طبقة الرياح
                            // const windLayer = L.layerGroup();

                            const marker = L.marker([point.LAT, point.LON], {
                                icon: arrowIcon,
                                rotationAngle: point.direction,
                                rotationOrigin: 'center center'
                            }).addTo(windLayer);


                            marker.bindPopup(`
                              <b>سرعة الرياح:</b> ${point.speed} كم/س<br>
                              <b>اتجاه الرياح:</b> ${point.direction} درجة
                              `);
                        }
                    }
                });
            });
});



// Bar Chart
const templeNames = BarChartData.map(t => t.name);
const impactValues = BarChartData.map(t => t.geohazardImpact);

const ctx = document.getElementById('hazardImpactChart').getContext('2d');

const gradient = ctx.createLinearGradient(0, 0, 0, 400);
gradient.addColorStop(0, 'rgba(173, 216, 230, 0.6)');
gradient.addColorStop(0.2, 'rgba(135, 206, 235, 0.6)');
gradient.addColorStop(0.4, 'rgba(70, 130, 180, 0.6)');
gradient.addColorStop(0.6, 'rgba(30, 144, 255, 0.6)');
gradient.addColorStop(1, 'rgba(0, 0, 139, 0.6)');

new Chart(ctx, {
    type: 'bar',
    data: {
        labels: templeNames,
        datasets: [{
            label: 'درجة تأثير الأخطار الجيومورفولوجية',
            data: impactValues,
            backgroundColor: gradient,
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1,
            barThickness: 30
        }]
    },
    options: {
        indexAxis: 'x',
        scales: {
            x: {
                beginAtZero: true,
                title: {
                    display: true,
                    color: '#fff'
                },
                ticks: {
                    color: '#fff'
                }
            },
            y: {
                ticks: {
                    color: '#fff'
                }
            }
        },
        plugins: {
            tooltip: {
                enabled: true,
                callbacks: {
                    label: function (context) {
                        const index = context.dataIndex;
                        const temple = BarChartData[index];
                        return [
                            `المعبد: ${temple.name}`,
                            `درجة الخطورة: ${temple.geohazardImpact}`,
                            `الوصف: ${temple.description}`
                        ];
                    }
                }
            },
            legend: {
                labels: {
                    color: '#fff'
                }
            }
        }
    }
});



// Donut Chart
const typeCounts = {};
templesData.forEach(temple => {
    typeCounts[temple.type] = (typeCounts[temple.type] || 0) + 1;
});

const labels = Object.keys(typeCounts);
const data = Object.values(typeCounts);
const ctx2 = document.getElementById('templesDonutChart').getContext('2d');


const donutChart = new Chart(ctx2, {
    type: 'doughnut',
    data: {
        labels: labels,
        datasets: [{
            data: data,
            backgroundColor: [
                '#5DADE2',
                '#884EA0',
                '#2E86C1'
            ],
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        cutout: '75%',
        plugins: {
            title: {
                display: true,
                text: 'نسبة أنواع المعابد',
                color: '#fff',
                font: {
                    size: 18
                },
                padding: {
                    bottom: 20
                }
            },
            legend: {
                position: 'bottom',
                labels: {
                    color: '#fff'
                },
                padding: 50
            }
        }
    }
});



// wave chart
const ctx3 = document.getElementById('myChart').getContext('2d');
const myChart = new Chart(ctx3, {
    type: 'line',
    data: {
        labels: ['يناير', 'فبراير', 'مارس', 'أبريل', 'مايو', 'يونيو', 'يوليو', 'أغسطس', 'سبتمبر', 'أكتوبر', 'نوفمبر', 'ديسمبر'],
        datasets: [{
            label: 'كمية المطر',
            data: [55, 35, 28, 40, 42, 38, 33, 27, 30, 45, 56, 57],
            borderColor: 'rgba(54, 162, 235, 1)',
            backgroundColor: 'rgba(54, 162, 235, 0.3)', // تعبئة تحت الخط
            fill: true,
            tension: 0.7, // درجة التموج (0 = خط مستقيم، 1 = تموج عالي)
            pointRadius: 0,
        }]
    },
    options: {
        plugins: {
            legend: {
                position: 'top',
            }
        },
        scales: {
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'كمية المطر (مم)'
                }
            }
        }
    }
});


