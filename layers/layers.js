ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:25832").setExtent([713295.024024, 6167603.341771, 723517.035142, 6175014.534067]);
var wms_layers = [];


        var lyr_Voyagernolabelsretina_0 = new ol.layer.Tile({
            'title': 'Voyager [no labels] (retina)',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://cartodb.com/basemaps/">Map tiles by CartoDB, under CC BY 3.0. Data by OpenStreetMap, under ODbL.</a>',
                url: 'https://a.basemaps.cartocdn.com/rastertiles/voyager_nolabels/{z}/{x}/{y}@2x.png'
            })
        });
var format_kommuneplan_1 = new ol.format.GeoJSON();
var features_kommuneplan_1 = format_kommuneplan_1.readFeatures(json_kommuneplan_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:25832'});
var jsonSource_kommuneplan_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_kommuneplan_1.addFeatures(features_kommuneplan_1);
var lyr_kommuneplan_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_kommuneplan_1, 
                style: style_kommuneplan_1,
                popuplayertitle: 'kommuneplan',
                interactive: false,
                title: '<img src="styles/legend/kommuneplan_1.png" /> kommuneplan'
            });
var format_Standbeskyttelsehvidovre_2 = new ol.format.GeoJSON();
var features_Standbeskyttelsehvidovre_2 = format_Standbeskyttelsehvidovre_2.readFeatures(json_Standbeskyttelsehvidovre_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:25832'});
var jsonSource_Standbeskyttelsehvidovre_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Standbeskyttelsehvidovre_2.addFeatures(features_Standbeskyttelsehvidovre_2);
var lyr_Standbeskyttelsehvidovre_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Standbeskyttelsehvidovre_2, 
                style: style_Standbeskyttelsehvidovre_2,
                popuplayertitle: 'Standbeskyttelse hvidovre',
                interactive: false,
                title: '<img src="styles/legend/Standbeskyttelsehvidovre_2.png" /> Standbeskyttelse hvidovre'
            });
var format_frededeomrder_3 = new ol.format.GeoJSON();
var features_frededeomrder_3 = format_frededeomrder_3.readFeatures(json_frededeomrder_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:25832'});
var jsonSource_frededeomrder_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_frededeomrder_3.addFeatures(features_frededeomrder_3);
var lyr_frededeomrder_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_frededeomrder_3, 
                style: style_frededeomrder_3,
                popuplayertitle: 'fredede områder',
                interactive: false,
    title: 'fredede områder<br />\
    <img src="styles/legend/frededeomrder_3_0.png" /> Damhuså<br />\
    <img src="styles/legend/frededeomrder_3_1.png" /> Kalvebod Kile<br />\
    <img src="styles/legend/frededeomrder_3_2.png" /> Rehbæks Eng<br />\
    <img src="styles/legend/frededeomrder_3_3.png" /> Vestvolden<br />\
    <img src="styles/legend/frededeomrder_3_4.png" /> Vigerslevparken, Damhussøen, Damhusengen, Krogebjergparken<br />\
    <img src="styles/legend/frededeomrder_3_5.png" /> <br />' });
var format_lokalplanvedtaget_4 = new ol.format.GeoJSON();
var features_lokalplanvedtaget_4 = format_lokalplanvedtaget_4.readFeatures(json_lokalplanvedtaget_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:25832'});
var jsonSource_lokalplanvedtaget_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_lokalplanvedtaget_4.addFeatures(features_lokalplanvedtaget_4);
var lyr_lokalplanvedtaget_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_lokalplanvedtaget_4, 
                style: style_lokalplanvedtaget_4,
                popuplayertitle: 'lokalplan vedtaget',
                interactive: false,
    title: 'lokalplan vedtaget<br />\
    <img src="styles/legend/lokalplanvedtaget_4_0.png" /> 1024399<br />\
    <img src="styles/legend/lokalplanvedtaget_4_1.png" /> 1053515<br />\
    <img src="styles/legend/lokalplanvedtaget_4_2.png" /> 1061002<br />\
    <img src="styles/legend/lokalplanvedtaget_4_3.png" /> 1061022<br />\
    <img src="styles/legend/lokalplanvedtaget_4_4.png" /> 1061038<br />\
    <img src="styles/legend/lokalplanvedtaget_4_5.png" /> 1061103<br />\
    <img src="styles/legend/lokalplanvedtaget_4_6.png" /> 1061140<br />\
    <img src="styles/legend/lokalplanvedtaget_4_7.png" /> 1061206<br />\
    <img src="styles/legend/lokalplanvedtaget_4_8.png" /> 1061209<br />\
    <img src="styles/legend/lokalplanvedtaget_4_9.png" /> 1061210<br />\
    <img src="styles/legend/lokalplanvedtaget_4_10.png" /> 1061715<br />\
    <img src="styles/legend/lokalplanvedtaget_4_11.png" /> 1061734<br />\
    <img src="styles/legend/lokalplanvedtaget_4_12.png" /> 1061739<br />\
    <img src="styles/legend/lokalplanvedtaget_4_13.png" /> 1061746<br />\
    <img src="styles/legend/lokalplanvedtaget_4_14.png" /> 1061756<br />\
    <img src="styles/legend/lokalplanvedtaget_4_15.png" /> 1061757<br />\
    <img src="styles/legend/lokalplanvedtaget_4_16.png" /> 1061824<br />\
    <img src="styles/legend/lokalplanvedtaget_4_17.png" /> 1061829<br />\
    <img src="styles/legend/lokalplanvedtaget_4_18.png" /> 1062026<br />\
    <img src="styles/legend/lokalplanvedtaget_4_19.png" /> 1062121<br />\
    <img src="styles/legend/lokalplanvedtaget_4_20.png" /> 1070479<br />\
    <img src="styles/legend/lokalplanvedtaget_4_21.png" /> 1071381<br />\
    <img src="styles/legend/lokalplanvedtaget_4_22.png" /> 1074662<br />\
    <img src="styles/legend/lokalplanvedtaget_4_23.png" /> 1074664<br />\
    <img src="styles/legend/lokalplanvedtaget_4_24.png" /> 1074675<br />\
    <img src="styles/legend/lokalplanvedtaget_4_25.png" /> 1075214<br />\
    <img src="styles/legend/lokalplanvedtaget_4_26.png" /> 1075219<br />\
    <img src="styles/legend/lokalplanvedtaget_4_27.png" /> 1075387<br />\
    <img src="styles/legend/lokalplanvedtaget_4_28.png" /> 1075393<br />\
    <img src="styles/legend/lokalplanvedtaget_4_29.png" /> 1075552<br />\
    <img src="styles/legend/lokalplanvedtaget_4_30.png" /> 1075553<br />\
    <img src="styles/legend/lokalplanvedtaget_4_31.png" /> 1075577<br />\
    <img src="styles/legend/lokalplanvedtaget_4_32.png" /> 1075593<br />\
    <img src="styles/legend/lokalplanvedtaget_4_33.png" /> 1075598<br />\
    <img src="styles/legend/lokalplanvedtaget_4_34.png" /> 1075609<br />\
    <img src="styles/legend/lokalplanvedtaget_4_35.png" /> 1075669<br />\
    <img src="styles/legend/lokalplanvedtaget_4_36.png" /> 1075682<br />\
    <img src="styles/legend/lokalplanvedtaget_4_37.png" /> 1075695<br />\
    <img src="styles/legend/lokalplanvedtaget_4_38.png" /> 1075708<br />\
    <img src="styles/legend/lokalplanvedtaget_4_39.png" /> 1075710<br />\
    <img src="styles/legend/lokalplanvedtaget_4_40.png" /> 1075718<br />\
    <img src="styles/legend/lokalplanvedtaget_4_41.png" /> 1075751<br />\
    <img src="styles/legend/lokalplanvedtaget_4_42.png" /> 1075752<br />\
    <img src="styles/legend/lokalplanvedtaget_4_43.png" /> 1075779<br />\
    <img src="styles/legend/lokalplanvedtaget_4_44.png" /> 1075795<br />\
    <img src="styles/legend/lokalplanvedtaget_4_45.png" /> 1075800<br />\
    <img src="styles/legend/lokalplanvedtaget_4_46.png" /> 1075801<br />\
    <img src="styles/legend/lokalplanvedtaget_4_47.png" /> 1075815<br />\
    <img src="styles/legend/lokalplanvedtaget_4_48.png" /> 1075877<br />\
    <img src="styles/legend/lokalplanvedtaget_4_49.png" /> 1075893<br />\
    <img src="styles/legend/lokalplanvedtaget_4_50.png" /> 1075897<br />\
    <img src="styles/legend/lokalplanvedtaget_4_51.png" /> 1075900<br />\
    <img src="styles/legend/lokalplanvedtaget_4_52.png" /> 1075902<br />\
    <img src="styles/legend/lokalplanvedtaget_4_53.png" /> 1075905<br />\
    <img src="styles/legend/lokalplanvedtaget_4_54.png" /> 1075907<br />\
    <img src="styles/legend/lokalplanvedtaget_4_55.png" /> 1075908<br />\
    <img src="styles/legend/lokalplanvedtaget_4_56.png" /> 1076004<br />\
    <img src="styles/legend/lokalplanvedtaget_4_57.png" /> 1076010<br />\
    <img src="styles/legend/lokalplanvedtaget_4_58.png" /> 1076019<br />\
    <img src="styles/legend/lokalplanvedtaget_4_59.png" /> 1076041<br />\
    <img src="styles/legend/lokalplanvedtaget_4_60.png" /> 1076064<br />\
    <img src="styles/legend/lokalplanvedtaget_4_61.png" /> 1076086<br />\
    <img src="styles/legend/lokalplanvedtaget_4_62.png" /> 1076094<br />\
    <img src="styles/legend/lokalplanvedtaget_4_63.png" /> 1076107<br />\
    <img src="styles/legend/lokalplanvedtaget_4_64.png" /> 1076114<br />\
    <img src="styles/legend/lokalplanvedtaget_4_65.png" /> 1076115<br />\
    <img src="styles/legend/lokalplanvedtaget_4_66.png" /> 1076126<br />\
    <img src="styles/legend/lokalplanvedtaget_4_67.png" /> 1076129<br />\
    <img src="styles/legend/lokalplanvedtaget_4_68.png" /> 1076287<br />\
    <img src="styles/legend/lokalplanvedtaget_4_69.png" /> 1076379<br />\
    <img src="styles/legend/lokalplanvedtaget_4_70.png" /> 1076865<br />\
    <img src="styles/legend/lokalplanvedtaget_4_71.png" /> 1076868<br />\
    <img src="styles/legend/lokalplanvedtaget_4_72.png" /> 1076874<br />\
    <img src="styles/legend/lokalplanvedtaget_4_73.png" /> 1076892<br />\
    <img src="styles/legend/lokalplanvedtaget_4_74.png" /> 1076902<br />\
    <img src="styles/legend/lokalplanvedtaget_4_75.png" /> 1076939<br />\
    <img src="styles/legend/lokalplanvedtaget_4_76.png" /> 1076961<br />\
    <img src="styles/legend/lokalplanvedtaget_4_77.png" /> 1076968<br />\
    <img src="styles/legend/lokalplanvedtaget_4_78.png" /> 1077070<br />\
    <img src="styles/legend/lokalplanvedtaget_4_79.png" /> 1077082<br />\
    <img src="styles/legend/lokalplanvedtaget_4_80.png" /> 1077085<br />\
    <img src="styles/legend/lokalplanvedtaget_4_81.png" /> 1077086<br />\
    <img src="styles/legend/lokalplanvedtaget_4_82.png" /> 1077558<br />\
    <img src="styles/legend/lokalplanvedtaget_4_83.png" /> 1077565<br />\
    <img src="styles/legend/lokalplanvedtaget_4_84.png" /> 1078074<br />\
    <img src="styles/legend/lokalplanvedtaget_4_85.png" /> 1078075<br />\
    <img src="styles/legend/lokalplanvedtaget_4_86.png" /> 1078077<br />\
    <img src="styles/legend/lokalplanvedtaget_4_87.png" /> 1078184<br />\
    <img src="styles/legend/lokalplanvedtaget_4_88.png" /> 1078227<br />\
    <img src="styles/legend/lokalplanvedtaget_4_89.png" /> 1078229<br />\
    <img src="styles/legend/lokalplanvedtaget_4_90.png" /> 1078231<br />\
    <img src="styles/legend/lokalplanvedtaget_4_91.png" /> 1078248<br />\
    <img src="styles/legend/lokalplanvedtaget_4_92.png" /> 1078275<br />\
    <img src="styles/legend/lokalplanvedtaget_4_93.png" /> 1078279<br />\
    <img src="styles/legend/lokalplanvedtaget_4_94.png" /> 1078289<br />\
    <img src="styles/legend/lokalplanvedtaget_4_95.png" /> 1078346<br />\
    <img src="styles/legend/lokalplanvedtaget_4_96.png" /> 1078464<br />\
    <img src="styles/legend/lokalplanvedtaget_4_97.png" /> 1078465<br />\
    <img src="styles/legend/lokalplanvedtaget_4_98.png" /> 1078468<br />\
    <img src="styles/legend/lokalplanvedtaget_4_99.png" /> 1079122<br />\
    <img src="styles/legend/lokalplanvedtaget_4_100.png" /> 1079123<br />\
    <img src="styles/legend/lokalplanvedtaget_4_101.png" /> 1079666<br />\
    <img src="styles/legend/lokalplanvedtaget_4_102.png" /> 1079671<br />\
    <img src="styles/legend/lokalplanvedtaget_4_103.png" /> 1081381<br />\
    <img src="styles/legend/lokalplanvedtaget_4_104.png" /> 1084485<br />\
    <img src="styles/legend/lokalplanvedtaget_4_105.png" /> 1084491<br />\
    <img src="styles/legend/lokalplanvedtaget_4_106.png" /> 1084492<br />\
    <img src="styles/legend/lokalplanvedtaget_4_107.png" /> 1103890<br />\
    <img src="styles/legend/lokalplanvedtaget_4_108.png" /> 1109560<br />\
    <img src="styles/legend/lokalplanvedtaget_4_109.png" /> 1328884<br />\
    <img src="styles/legend/lokalplanvedtaget_4_110.png" /> 1359145<br />\
    <img src="styles/legend/lokalplanvedtaget_4_111.png" /> 1369547<br />\
    <img src="styles/legend/lokalplanvedtaget_4_112.png" /> 1374739<br />\
    <img src="styles/legend/lokalplanvedtaget_4_113.png" /> 1792902<br />\
    <img src="styles/legend/lokalplanvedtaget_4_114.png" /> 1869505<br />\
    <img src="styles/legend/lokalplanvedtaget_4_115.png" /> 2136388<br />\
    <img src="styles/legend/lokalplanvedtaget_4_116.png" /> 2186492<br />\
    <img src="styles/legend/lokalplanvedtaget_4_117.png" /> 2269185<br />\
    <img src="styles/legend/lokalplanvedtaget_4_118.png" /> 2641209<br />\
    <img src="styles/legend/lokalplanvedtaget_4_119.png" /> 2702963<br />\
    <img src="styles/legend/lokalplanvedtaget_4_120.png" /> 2702964<br />\
    <img src="styles/legend/lokalplanvedtaget_4_121.png" /> 2702965<br />\
    <img src="styles/legend/lokalplanvedtaget_4_122.png" /> 2702968<br />\
    <img src="styles/legend/lokalplanvedtaget_4_123.png" /> 2702969<br />\
    <img src="styles/legend/lokalplanvedtaget_4_124.png" /> 2702993<br />\
    <img src="styles/legend/lokalplanvedtaget_4_125.png" /> 2978253<br />\
    <img src="styles/legend/lokalplanvedtaget_4_126.png" /> 3016098<br />\
    <img src="styles/legend/lokalplanvedtaget_4_127.png" /> 3016099<br />\
    <img src="styles/legend/lokalplanvedtaget_4_128.png" /> 3016105<br />\
    <img src="styles/legend/lokalplanvedtaget_4_129.png" /> 3186913<br />\
    <img src="styles/legend/lokalplanvedtaget_4_130.png" /> 3188617<br />\
    <img src="styles/legend/lokalplanvedtaget_4_131.png" /> 3188619<br />\
    <img src="styles/legend/lokalplanvedtaget_4_132.png" /> 3812280<br />\
    <img src="styles/legend/lokalplanvedtaget_4_133.png" /> 3964626<br />\
    <img src="styles/legend/lokalplanvedtaget_4_134.png" /> 3964627<br />\
    <img src="styles/legend/lokalplanvedtaget_4_135.png" /> 3964812<br />\
    <img src="styles/legend/lokalplanvedtaget_4_136.png" /> 9419556<br />\
    <img src="styles/legend/lokalplanvedtaget_4_137.png" /> 9431987<br />\
    <img src="styles/legend/lokalplanvedtaget_4_138.png" /> 9431989<br />\
    <img src="styles/legend/lokalplanvedtaget_4_139.png" /> 9431990<br />\
    <img src="styles/legend/lokalplanvedtaget_4_140.png" /> 9431991<br />\
    <img src="styles/legend/lokalplanvedtaget_4_141.png" /> 9431992<br />\
    <img src="styles/legend/lokalplanvedtaget_4_142.png" /> 9431993<br />\
    <img src="styles/legend/lokalplanvedtaget_4_143.png" /> 9431994<br />\
    <img src="styles/legend/lokalplanvedtaget_4_144.png" /> 9690454<br />\
    <img src="styles/legend/lokalplanvedtaget_4_145.png" /> 9717080<br />\
    <img src="styles/legend/lokalplanvedtaget_4_146.png" /> 9731022<br />\
    <img src="styles/legend/lokalplanvedtaget_4_147.png" /> 9732835<br />\
    <img src="styles/legend/lokalplanvedtaget_4_148.png" /> 9732862<br />\
    <img src="styles/legend/lokalplanvedtaget_4_149.png" /> 9753254<br />\
    <img src="styles/legend/lokalplanvedtaget_4_150.png" /> 10353005<br />\
    <img src="styles/legend/lokalplanvedtaget_4_151.png" /> 10456675<br />\
    <img src="styles/legend/lokalplanvedtaget_4_152.png" /> 10478656<br />\
    <img src="styles/legend/lokalplanvedtaget_4_153.png" /> 10840028<br />\
    <img src="styles/legend/lokalplanvedtaget_4_154.png" /> 10900534<br />\
    <img src="styles/legend/lokalplanvedtaget_4_155.png" /> 10906517<br />\
    <img src="styles/legend/lokalplanvedtaget_4_156.png" /> 10985743<br />\
    <img src="styles/legend/lokalplanvedtaget_4_157.png" /> 11021467<br />\
    <img src="styles/legend/lokalplanvedtaget_4_158.png" /> 11126774<br />\
    <img src="styles/legend/lokalplanvedtaget_4_159.png" /> 11159816<br />\
    <img src="styles/legend/lokalplanvedtaget_4_160.png" /> 11176926<br />\
    <img src="styles/legend/lokalplanvedtaget_4_161.png" /> 11185105<br />\
    <img src="styles/legend/lokalplanvedtaget_4_162.png" /> 11198619<br />\
    <img src="styles/legend/lokalplanvedtaget_4_163.png" /> 11228193<br />\
    <img src="styles/legend/lokalplanvedtaget_4_164.png" /> 11240317<br />\
    <img src="styles/legend/lokalplanvedtaget_4_165.png" /> 11252419<br />\
    <img src="styles/legend/lokalplanvedtaget_4_166.png" /> 11307736<br />\
    <img src="styles/legend/lokalplanvedtaget_4_167.png" /> 11307768<br />\
    <img src="styles/legend/lokalplanvedtaget_4_168.png" /> 11317442<br />\
    <img src="styles/legend/lokalplanvedtaget_4_169.png" /> 11347122<br />\
    <img src="styles/legend/lokalplanvedtaget_4_170.png" /> <br />' });
var format_Supermarked_5 = new ol.format.GeoJSON();
var features_Supermarked_5 = format_Supermarked_5.readFeatures(json_Supermarked_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:25832'});
var jsonSource_Supermarked_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Supermarked_5.addFeatures(features_Supermarked_5);
var lyr_Supermarked_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Supermarked_5, 
                style: style_Supermarked_5,
                popuplayertitle: 'Supermarked',
                interactive: true,
                title: '<img src="styles/legend/Supermarked_5.png" /> Supermarked'
            });
var format_Lger_6 = new ol.format.GeoJSON();
var features_Lger_6 = format_Lger_6.readFeatures(json_Lger_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:25832'});
var jsonSource_Lger_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lger_6.addFeatures(features_Lger_6);
var lyr_Lger_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Lger_6, 
                style: style_Lger_6,
                popuplayertitle: ' Læger',
                interactive: true,
                title: ' Læger'
            });
var format_Brneinst_7 = new ol.format.GeoJSON();
var features_Brneinst_7 = format_Brneinst_7.readFeatures(json_Brneinst_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:25832'});
var jsonSource_Brneinst_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Brneinst_7.addFeatures(features_Brneinst_7);
var lyr_Brneinst_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Brneinst_7, 
                style: style_Brneinst_7,
                popuplayertitle: 'Børneinst.',
                interactive: true,
                title: 'Børneinst.'
            });
var format_folkeskoler_8 = new ol.format.GeoJSON();
var features_folkeskoler_8 = format_folkeskoler_8.readFeatures(json_folkeskoler_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:25832'});
var jsonSource_folkeskoler_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_folkeskoler_8.addFeatures(features_folkeskoler_8);
var lyr_folkeskoler_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_folkeskoler_8, 
                style: style_folkeskoler_8,
                popuplayertitle: 'folkeskoler',
                interactive: true,
                title: '<img src="styles/legend/folkeskoler_8.png" /> folkeskoler'
            });
var format_Togstationer_9 = new ol.format.GeoJSON();
var features_Togstationer_9 = format_Togstationer_9.readFeatures(json_Togstationer_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:25832'});
var jsonSource_Togstationer_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Togstationer_9.addFeatures(features_Togstationer_9);
var lyr_Togstationer_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Togstationer_9, 
                style: style_Togstationer_9,
                popuplayertitle: 'Togstationer',
                interactive: true,
                title: '<img src="styles/legend/Togstationer_9.png" /> Togstationer'
            });

lyr_Voyagernolabelsretina_0.setVisible(true);lyr_kommuneplan_1.setVisible(true);lyr_Standbeskyttelsehvidovre_2.setVisible(true);lyr_frededeomrder_3.setVisible(true);lyr_lokalplanvedtaget_4.setVisible(true);lyr_Supermarked_5.setVisible(true);lyr_Lger_6.setVisible(true);lyr_Brneinst_7.setVisible(true);lyr_folkeskoler_8.setVisible(true);lyr_Togstationer_9.setVisible(true);
var layersList = [lyr_Voyagernolabelsretina_0,lyr_kommuneplan_1,lyr_Standbeskyttelsehvidovre_2,lyr_frededeomrder_3,lyr_lokalplanvedtaget_4,lyr_Supermarked_5,lyr_Lger_6,lyr_Brneinst_7,lyr_folkeskoler_8,lyr_Togstationer_9];
lyr_kommuneplan_1.set('fieldAliases', {'fid': 'fid', 'oid': 'oid', 'id': 'id', 'planid': 'planid', 'objektkode': 'objektkode', 'komnr': 'komnr', 'plannavn': 'plannavn', 'doklink': 'doklink', 'datoforsl': 'datoforsl', 'datovedt': 'datovedt', 'datoaflyst': 'datoaflyst', 'datoikraft': 'datoikraft', 'datoslut': 'datoslut', 'aktuel': 'aktuel', 'datooprt': 'datooprt', 'datoopdt': 'datoopdt', 'status': 'status', 'datostart': 'datostart', 'glkomnr': 'glkomnr', 'kommunenavn': 'kommunenavn', 'glkomnavn': 'glkomnavn', 'glkomnavn_besk': 'glkomnavn_besk', });
lyr_Standbeskyttelsehvidovre_2.set('fieldAliases', {'fid': 'fid', 'forretningshaendelse': 'forretningshaendelse', 'senesteSagLokalId': 'senesteSagLokalId', 'forretningsproces': 'forretningsproces', 'id.namespace': 'id.namespace', 'id.lokalId': 'id.lokalId', 'paataenktHandling': 'paataenktHandling', 'registreringFra': 'registreringFra', 'virkningFra': 'virkningFra', 'virkningsaktoer': 'virkningsaktoer', 'temaFladeID': 'temaFladeID', 'tematype': 'tematype', 'jordstykkeLokalId': 'jordstykkeLokalId', });
lyr_frededeomrder_3.set('fieldAliases', {'fid': 'fid', 'Temakode': 'Temakode', 'Temanavn': 'Temanavn', 'Objekt_id': 'Objekt_id', 'Version_id': 'Version_id', 'Systid_fra': 'Systid_fra', 'Systid_til': 'Systid_til', 'Oprettet': 'Oprettet', 'Oprindkode': 'Oprindkode', 'Oprindelse': 'Oprindelse', 'Statuskode': 'Statuskode', 'Status': 'Status', 'Off_kode': 'Off_kode', 'Offentlig': 'Offentlig', 'CVR_kode': 'CVR_kode', 'CVR_navn': 'CVR_navn', 'Bruger_id': 'Bruger_id', 'Link': 'Link', 'Shape_area': 'Shape_area', 'Shape_leng': 'Shape_leng', 'Fred_tkode': 'Fred_tkode', 'Fred_tnavn': 'Fred_tnavn', 'Reg_nr': 'Reg_nr', 'Fred_navn': 'Fred_navn', 'Aendr_kode': 'Aendr_kode', 'Aendrbegr': 'Aendrbegr', 'Aar_fredn': 'Aar_fredn', 'Gyldig_fra': 'Gyldig_fra', 'Gyldig_til': 'Gyldig_til', });
lyr_lokalplanvedtaget_4.set('fieldAliases', {'planid': 'planid', 'plannr': 'plannr', 'plannavn': 'plannavn', 'anvgen': 'anvgen', 'datovedt': 'datovedt', 'doklink': 'doklink', });
lyr_Supermarked_5.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Lger_6.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Brneinst_7.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_folkeskoler_8.set('fieldAliases', {'Skolenavn': 'Skolenavn', 'Adresse': 'Adresse', 'By': 'By', 'Hjemmeside': 'Hjemmeside', 'result_num': 'result_num', 'osm_id': 'osm_id', 'display_na': 'display_na', 'category': 'category', 'type': 'type', 'latlong': 'latlong', });
lyr_Togstationer_9.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_kommuneplan_1.set('fieldImages', {'fid': 'TextEdit', 'oid': 'TextEdit', 'id': 'Range', 'planid': 'Range', 'objektkode': 'Range', 'komnr': 'Range', 'plannavn': 'TextEdit', 'doklink': 'TextEdit', 'datoforsl': 'Range', 'datovedt': 'Range', 'datoaflyst': 'Range', 'datoikraft': 'Range', 'datoslut': 'Range', 'aktuel': 'TextEdit', 'datooprt': 'DateTime', 'datoopdt': 'DateTime', 'status': 'TextEdit', 'datostart': 'Range', 'glkomnr': 'Range', 'kommunenavn': 'TextEdit', 'glkomnavn': 'TextEdit', 'glkomnavn_besk': 'TextEdit', });
lyr_Standbeskyttelsehvidovre_2.set('fieldImages', {'fid': 'TextEdit', 'forretningshaendelse': 'TextEdit', 'senesteSagLokalId': 'TextEdit', 'forretningsproces': 'TextEdit', 'id.namespace': 'TextEdit', 'id.lokalId': 'TextEdit', 'paataenktHandling': 'TextEdit', 'registreringFra': 'DateTime', 'virkningFra': 'DateTime', 'virkningsaktoer': 'TextEdit', 'temaFladeID': 'Range', 'tematype': 'TextEdit', 'jordstykkeLokalId': 'TextEdit', });
lyr_frededeomrder_3.set('fieldImages', {'fid': 'TextEdit', 'Temakode': 'TextEdit', 'Temanavn': 'TextEdit', 'Objekt_id': 'TextEdit', 'Version_id': 'TextEdit', 'Systid_fra': 'TextEdit', 'Systid_til': 'TextEdit', 'Oprettet': 'TextEdit', 'Oprindkode': 'TextEdit', 'Oprindelse': 'TextEdit', 'Statuskode': 'TextEdit', 'Status': 'TextEdit', 'Off_kode': 'TextEdit', 'Offentlig': 'TextEdit', 'CVR_kode': 'TextEdit', 'CVR_navn': 'TextEdit', 'Bruger_id': 'TextEdit', 'Link': 'TextEdit', 'Shape_area': 'TextEdit', 'Shape_leng': 'TextEdit', 'Fred_tkode': 'TextEdit', 'Fred_tnavn': 'TextEdit', 'Reg_nr': 'TextEdit', 'Fred_navn': 'TextEdit', 'Aendr_kode': 'TextEdit', 'Aendrbegr': 'TextEdit', 'Aar_fredn': 'TextEdit', 'Gyldig_fra': 'TextEdit', 'Gyldig_til': 'TextEdit', });
lyr_lokalplanvedtaget_4.set('fieldImages', {'planid': 'TextEdit', 'plannr': 'TextEdit', 'plannavn': 'TextEdit', 'anvgen': 'TextEdit', 'datovedt': 'TextEdit', 'doklink': 'TextEdit', });
lyr_Supermarked_5.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_Lger_6.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_Brneinst_7.set('fieldImages', {'Name': 'TextEdit', 'description': 'Hidden', 'timestamp': 'Hidden', 'begin': 'Hidden', 'end': 'Hidden', 'altitudeMode': 'Hidden', 'tessellate': 'Hidden', 'extrude': 'Hidden', 'visibility': 'Hidden', 'drawOrder': 'Hidden', 'icon': 'Hidden', });
lyr_folkeskoler_8.set('fieldImages', {'Skolenavn': 'TextEdit', 'Adresse': 'TextEdit', 'By': 'TextEdit', 'Hjemmeside': 'TextEdit', 'result_num': 'Hidden', 'osm_id': 'Hidden', 'display_na': 'Hidden', 'category': 'Hidden', 'type': 'Hidden', 'latlong': 'Hidden', });
lyr_Togstationer_9.set('fieldImages', {'Name': 'TextEdit', 'description': 'Hidden', 'timestamp': 'Hidden', 'begin': 'Hidden', 'end': 'Hidden', 'altitudeMode': 'Hidden', 'tessellate': 'Hidden', 'extrude': 'Hidden', 'visibility': 'Hidden', 'drawOrder': 'Hidden', 'icon': 'Hidden', });
lyr_kommuneplan_1.set('fieldLabels', {'fid': 'no label', 'oid': 'no label', 'id': 'no label', 'planid': 'no label', 'objektkode': 'no label', 'komnr': 'no label', 'plannavn': 'no label', 'doklink': 'no label', 'datoforsl': 'no label', 'datovedt': 'no label', 'datoaflyst': 'no label', 'datoikraft': 'no label', 'datoslut': 'no label', 'aktuel': 'no label', 'datooprt': 'inline label - always visible', 'datoopdt': 'no label', 'status': 'no label', 'datostart': 'no label', 'glkomnr': 'no label', 'kommunenavn': 'no label', 'glkomnavn': 'no label', 'glkomnavn_besk': 'no label', });
lyr_Standbeskyttelsehvidovre_2.set('fieldLabels', {'fid': 'inline label - always visible', 'forretningshaendelse': 'no label', 'senesteSagLokalId': 'no label', 'forretningsproces': 'no label', 'id.namespace': 'no label', 'id.lokalId': 'no label', 'paataenktHandling': 'no label', 'registreringFra': 'no label', 'virkningFra': 'no label', 'virkningsaktoer': 'no label', 'temaFladeID': 'no label', 'tematype': 'no label', 'jordstykkeLokalId': 'no label', });
lyr_frededeomrder_3.set('fieldLabels', {'fid': 'no label', 'Temakode': 'no label', 'Temanavn': 'no label', 'Objekt_id': 'no label', 'Version_id': 'no label', 'Systid_fra': 'no label', 'Systid_til': 'no label', 'Oprettet': 'no label', 'Oprindkode': 'no label', 'Oprindelse': 'no label', 'Statuskode': 'no label', 'Status': 'no label', 'Off_kode': 'no label', 'Offentlig': 'no label', 'CVR_kode': 'no label', 'CVR_navn': 'no label', 'Bruger_id': 'no label', 'Link': 'no label', 'Shape_area': 'no label', 'Shape_leng': 'no label', 'Fred_tkode': 'no label', 'Fred_tnavn': 'no label', 'Reg_nr': 'no label', 'Fred_navn': 'no label', 'Aendr_kode': 'no label', 'Aendrbegr': 'no label', 'Aar_fredn': 'no label', 'Gyldig_fra': 'no label', 'Gyldig_til': 'no label', });
lyr_lokalplanvedtaget_4.set('fieldLabels', {'planid': 'no label', 'plannr': 'no label', 'plannavn': 'no label', 'anvgen': 'no label', 'datovedt': 'no label', 'doklink': 'no label', });
lyr_Supermarked_5.set('fieldLabels', {'Name': 'inline label - always visible', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_Lger_6.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_Brneinst_7.set('fieldLabels', {'Name': 'inline label - always visible', });
lyr_folkeskoler_8.set('fieldLabels', {'Skolenavn': 'inline label - always visible', 'Adresse': 'inline label - always visible', 'By': 'inline label - always visible', 'Hjemmeside': 'inline label - always visible', });
lyr_Togstationer_9.set('fieldLabels', {'Name': 'inline label - always visible', });
lyr_Togstationer_9.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});