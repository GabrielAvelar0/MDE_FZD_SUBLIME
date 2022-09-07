var wms_layers = [];

var lyr_L150694E0942N_0 = new ol.layer.Image({
                            opacity: 1,
                            title: "L15-0694E-0942N",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/L150694E0942N_0.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-6457400.148629, -1604566.097533, -6437832.269390, -1584998.218295]
                            })
                        });
var lyr_L150694E0943N_1 = new ol.layer.Image({
                            opacity: 1,
                            title: "L15-0694E-0943N",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/L150694E0943N_1.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-6457400.148629, -1584998.218295, -6437832.269390, -1565430.339057]
                            })
                        });
var lyr_L150695E0942N_2 = new ol.layer.Image({
                            opacity: 1,
                            title: "L15-0695E-0942N",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/L150695E0942N_2.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-6437832.269390, -1604566.097533, -6418264.390152, -1584998.218295]
                            })
                        });
var lyr_L150695E0943N_3 = new ol.layer.Image({
                            opacity: 1,
                            title: "L15-0695E-0943N",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/L150695E0943N_3.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-6437832.269390, -1584998.218295, -6418264.390152, -1565430.339057]
                            })
                        });
var lyr_L150696E0942N_4 = new ol.layer.Image({
                            opacity: 1,
                            title: "L15-0696E-0942N",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/L150696E0942N_4.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-6418264.390152, -1604566.097533, -6398696.510914, -1584998.218295]
                            })
                        });
var lyr_L150696E0943N_5 = new ol.layer.Image({
                            opacity: 1,
                            title: "L15-0696E-0943N",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/L150696E0943N_5.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-6418264.390152, -1584998.218295, -6398696.510914, -1565430.339057]
                            })
                        });
var format_Sublime_SHP_6 = new ol.format.GeoJSON();
var features_Sublime_SHP_6 = format_Sublime_SHP_6.readFeatures(json_Sublime_SHP_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sublime_SHP_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sublime_SHP_6.addFeatures(features_Sublime_SHP_6);
var lyr_Sublime_SHP_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Sublime_SHP_6, 
                style: style_Sublime_SHP_6,
                interactive: false,
                title: '<img src="styles/legend/Sublime_SHP_6.png" /> Sublime_SHP'
            });
var format_Contornos_7 = new ol.format.GeoJSON();
var features_Contornos_7 = format_Contornos_7.readFeatures(json_Contornos_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Contornos_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Contornos_7.addFeatures(features_Contornos_7);
var lyr_Contornos_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Contornos_7, 
                style: style_Contornos_7,
                interactive: false,
                title: '<img src="styles/legend/Contornos_7.png" /> Contornos'
            });

lyr_L150694E0942N_0.setVisible(true);lyr_L150694E0943N_1.setVisible(true);lyr_L150695E0942N_2.setVisible(true);lyr_L150695E0943N_3.setVisible(true);lyr_L150696E0942N_4.setVisible(true);lyr_L150696E0943N_5.setVisible(true);lyr_Sublime_SHP_6.setVisible(true);lyr_Contornos_7.setVisible(true);
var layersList = [lyr_L150694E0942N_0,lyr_L150694E0943N_1,lyr_L150695E0942N_2,lyr_L150695E0943N_3,lyr_L150696E0942N_4,lyr_L150696E0943N_5,lyr_Sublime_SHP_6,lyr_Contornos_7];
lyr_Sublime_SHP_6.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'NOME': 'NOME', });
lyr_Contornos_7.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', 'COTA': 'COTA', });
lyr_Sublime_SHP_6.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', 'NOME': 'TextEdit', });
lyr_Contornos_7.set('fieldImages', {'fid': 'TextEdit', 'ID': 'Range', 'COTA': 'TextEdit', });
lyr_Sublime_SHP_6.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'header label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'NOME': 'no label', });
lyr_Contornos_7.set('fieldLabels', {'fid': 'no label', 'ID': 'no label', 'COTA': 'inline label', });
lyr_Contornos_7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});