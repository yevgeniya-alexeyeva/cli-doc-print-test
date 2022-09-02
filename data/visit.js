module.exports.visitData = {
  tempFilesPath: `C:\\Users\\yalek\\OneDrive\\Documents\\medical\\temp\\templates`,
  practice: {
    logo: null,
    description: 'Stomatology description',
    name: 'StomatologyPractice',
    country: 'Serbia',
    city: 'Subotica',
    street: 'Marsala Tita',
    ZIP: '21100',
    printingPreferences: {}
  },
  printingPreferences: null,
  template: '<html>\n' +
    '\n' +
    '<head>\n' +
    '    <link href="./styles.css" rel="stylesheet" type="text/css" />\n' +
    '<link rel="preconnect" href="https://fonts.googleapis.com">\n' +
    '<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>\n' +
    '<link href="https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap" rel="stylesheet">\n' +
    '    <style>\n' +
    '        $STYLE\n' +
    '    </style>\n' +
    '</head>\n' +
    '\n' +
    '<body>\n' +
    '    <div class="container">\n' +
    '        <header class="header">\n' +
    '            <% if(visit.practice.logo) { %>\n' +
    '                <div class="logo">\n' +
    '                    <%= visit.practice.logo %>\n' +
    '                </div>\n' +
    '                <% } %>\n' +
    '                    <% if(visit.practice.description) { %>\n' +
    '                        <div class="header-description">\n' +
    '                            <%= visit.practice.description %>\n' +
    '                        </div>\n' +
    '                        <% } else {%>\n' +
    '                            <%- include(visit.headerPath) %>\n' +
    '                                <%} %>\n' +
    '        </header>\n' +
    '        <h1 class="report-title">Izveštaj lekara specijaliste</h1>\n' +
    '        <section class="patient-data">\n' +
    '            <ul>\n' +
    '                <li><span class="point-name">Pacijent:</span><span class="point-data">\n' +
    '                        <%= visit.patient %>\n' +
    '                    </span>\n' +
    '                </li>\n' +
    '                <li><span class="point-name">Datum rođenja:</span><span class="point-data">\n' +
    '                        <%= visit.DOB %>\n' +
    '                    </span></li>\n' +
    '                <% if(visit.address) { %>\n' +
    '                    <li><span class="point-name">Adresa:</span><span class="point-data">\n' +
    '                            <%= visit.address %>\n' +
    '                        </span></li>\n' +
    '                    <% } %>\n' +
    '            </ul>\n' +
    '        </section>\n' +
    '        <section class="report">\n' +
    '            <% if(visit.anamnesisGynecology) { %>\n' +
    "                <%- include( visit.paths['visit_partial_gynecology_anamnesis'], {anamnesis: visit.anamnesisGynecology})\n" +
    '                    %>\n' +
    '                    <% } %>\n' +
    '                        <% if(visit.anamnesisOrthodontics) { %>\n' +
    "                            <%- include( visit.paths['visit_partial_orthodontics_anamnesis'], {anamnesis:\n" +
    '                                visit.anamnesisOrthodontics}) %>\n' +
    '                                <% } %>\n' +
    '                                    <% if(visit.anamnesisDental) { %>\n' +
    "                                        <%- include( visit.paths['visit_partial_dentistry_anamnesis'], {anamnesis:\n" +
    '                                            visit.anamnesisDental}) %>\n' +
    '                                            <% } %>\n' +
    '                                                <% if(visit.examinations.length) { %>\n' +
    '                                                    <h2 class="report-item-title">\n' +
    '                                                        Pregledi\n' +
    '                                                    </h2>\n' +
    '                                                    <% visit.examinations.map(function(item) { %>\n' +
    "                                                        <%- include( visit.paths['visit_partial_examination'],\n" +
    '                                                            {examination: item || null}) %>\n' +
    '                                                            <%})}%>\n' +
    '                                                                <% if(visit.diagnoses.length) {%>\n' +
    '                                                                    <h3 class="report-item-secondary-title">\n' +
    '                                                                        Dijagnoza\n' +
    '                                                                    </h3>\n' +
    '                                                                    <% visit.diagnoses.map(function(item) { %>\n' +
    '                                                                        <%- include(\n' +
    "                                                                            visit.paths['visit_partial_diagnosis'],\n" +
    '                                                                            {diagnosis: item}) %>\n' +
    '                                                                            <%})}%>\n' +
    '                                                                                <% if(visit.treatments.length) { %>\n' +
    '                                                                                    <h2 class="report-item-title">\n' +
    '                                                                                        Terapije\n' +
    '                                                                                    </h2>\n' +
    '                                                                                    <% visit.treatments.map(function(item)\n' +
    '                                                                                        { %>\n' +
    '                                                                                        <%- include(\n' +
    "                                                                                            visit.paths['visit_partial_treatment'],\n" +
    '                                                                                            {treatment: item}) %>\n' +
    '                                                                                            <%})}%>\n' +
    '        </section>\n' +
    '        <section class="signature">\n' +
    '            <div class="date-container">\n' +
    '                <div class="report-place">\n' +
    '                    <%= visit.practice.city %>\n' +
    '                </div>\n' +
    '                <div class="report-date">\n' +
    '                    <%= visit.date %><span>godine</span>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '            <div class="doctor-data">\n' +
    '                <div class="doctor-name"> dr\n' +
    '                    <%= visit.doctorName %>\n' +
    '                </div>\n' +
    '                <% if(visit.doctorTitle) { %>\n' +
    '                    <div class="doctor-title">\n' +
    '                        <%= visit.doctorTitle %>\n' +
    '                    </div>\n' +
    '                    <% } %>\n' +
    '            </div>\n' +
    '        </section>\n' +
    '    </div>\n' +
    '</body>\n' +
    '\n' +
    '</html>',
  style: 'body {\n' +
    "    font-family: 'Lato', sans-serif;\n" +
    '    font-size: 14px;\n' +
    ' }\n' +
    '\n' +
    'ul {\n' +
    '    list-style: none;\n' +
    '    margin: 0;\n' +
    '    padding: 0;\n' +
    '}\n' +
    '\n' +
    'p {\n' +
    '    text-indent: 0;\n' +
    '}\n' +
    '\n' +
    'h2 {\n' +
    '    font-size: 1.5em;\n' +
    '}\n' +
    '\n' +
    'h3 {\n' +
    '    font-size: 1.17em;\n' +
    '}\n' +
    '\n' +
    '.header {\n' +
    '    display: flex;\n' +
    '    justify-content: space-between;\n' +
    '    display: -webkit-box;\n' +
    '    display: -webkit-flex;\n' +
    '}\n' +
    '\n' +
    '.header-logo {\n' +
    '    margin-right: auto;\n' +
    '}\n' +
    '\n' +
    '.report-title {\n' +
    '    text-align: center;\n' +
    '    font-size: 2em;\n' +
    '}\n' +
    '\n' +
    '\n' +
    '.patient-data {\n' +
    '    margin-top: 50px\n' +
    '}\n' +
    '\n' +
    '.container {\n' +
    '    margin: 0 1in;\n' +
    '}\n' +
    '\n' +
    '.point-name {\n' +
    '    font-weight: bold;\n' +
    '}\n' +
    '\n' +
    '.point-data {\n' +
    '    margin-left: 10px;\n' +
    '}\n' +
    '\n' +
    '.signature {\n' +
    '    display: flex;\n' +
    '    margin-top: 70px;\n' +
    '    display: -webkit-box;\n' +
    '    display: -webkit-flex;\n' +
    '}\n' +
    '\n' +
    '.doctor-data {\n' +
    '    margin-left: auto;\n' +
    '}\n' +
    '\n' +
    '.report-item-title {\n' +
    '    text-align: center;\n' +
    '    size: 14px;\n' +
    '    font-weight: bold;\n' +
    '}\n' +
    '\n' +
    '.column-wrapper {\n' +
    '    display: flex;\n' +
    '    display: -webkit-box;\n' +
    '    display: -webkit-flex;\n' +
    '    flex-direction: column;\n' +
    '}\n' +
    '\n' +
    '.right-column {\n' +
    '    margin-left: 100px;\n' +
    '}',
  partialTemplates: [
    {
      DocumentTemplateID: '99920737913013358',
      Active: true,
      Key: 'visit_partial_gynecology_anamnesis',
      Content: '<div class="anamnesis-gynecology report-item">\n' +
        '    <h3 class="report-item-secondary-title">Anamneza</h3>\n' +
        '    <div class="column-wrapper">\n' +
        '        <ul class="report-item-list">\n' +
        '            <li><span class="point-name">Vaginalni porođaj:</span>\n' +
        '                <% if(anamnesis.PartusVag) { %><span class="point-data">\n' +
        '                        <%= anamnesis.PartusVag%>\n' +
        '                    </span>\n' +
        '                    <% } %>\n' +
        '            </li>\n' +
        '            <li><span class="point-name">Spontani abortus:</span>\n' +
        '                <% if(anamnesis.AbortusSp) { %><span class="point-data">\n' +
        '                        <%= anamnesis.AbortusSp%>\n' +
        '                    </span>\n' +
        '                    <% } %>\n' +
        '            </li>\n' +
        '            <li><span class="point-name">Menses:</span>\n' +
        '                <% if(anamnesis.Menses) { %><span class="point-data">\n' +
        '                        <%= anamnesis.Menses%>\n' +
        '                    </span>\n' +
        '                    <% } %>\n' +
        '            </li>\n' +
        '            <li><span class="point-name">Poslednja\n' +
        '                    menstruacija:\n' +
        '                </span>\n' +
        "                <% if(anamnesis.LMP) { const dateLMP=(new Date(anamnesis.LMP)).toLocaleDateString('sr-RS') %><span\n" +
        '                        class="point-data">\n' +
        '                        <%= dateLMP %>\n' +
        '                    </span>\n' +
        '                    <% } %>\n' +
        '            </li>\n' +
        '        </ul>\n' +
        '        <ul class="report-item-list right-column">\n' +
        '            <li><span class="point-name">Carski rez:</span>\n' +
        '                <% if(anamnesis.PartusSc) { %><span class="point-data">\n' +
        '                        <%= anamnesis.PartusSc%>\n' +
        '                    </span>\n' +
        '                    <% } %>\n' +
        '            </li>\n' +
        '            <li><span class="point-name">Veštački abortus:</span>\n' +
        '                <% if(anamnesis.AbortusArt) { %><span class="point-data">\n' +
        '                        <%= anamnesis.AbortusArt%>\n' +
        '                    </span>\n' +
        '                    <% } %>\n' +
        '            </li>\n' +
        '            <li><span class="point-name">Očekivan termin\n' +
        '                    porođaja:</span>\n' +
        "                <% if(anamnesis.EDD) { const dateEDD=(new Date(anamnesis.EDD)).toLocaleDateString('sr-RS') %><span\n" +
        '                        class="point-data">\n' +
        '                        <%= dateEDD %>\n' +
        '                    </span>\n' +
        '                    <% } %>\n' +
        '            </li>\n' +
        '        </ul>\n' +
        '    </div>\n' +
        '    <ul class="report-item-list">\n' +
        '        <% if(anamnesis.PreviousInterventions) { %>\n' +
        '            <li><span class="point-name">Prethodne intervencije\n' +
        '                    i operacije:</span><span class="point-data">\n' +
        '                    <%= anamnesis.PreviousInterventions %>\n' +
        '                </span></li>\n' +
        '            <% } %>\n' +
        '                <% if(anamnesis.Contraception) { %>\n' +
        '                    <li><span class="point-name">Kontracepcija:</span><span class="point-data">\n' +
        '                            <%= anamnesis.Contraception%>\n' +
        '                        </span></li>\n' +
        '                    <% } %>\n' +
        '    </ul>\n' +
        '</div>',
      Style: '',
      Deleted: false,
      CustomerID: '99906837368800211'
    },
    {
      DocumentTemplateID: '99920737913013360',
      Active: true,
      Key: 'visit_partial_orthodontics_anamnesis',
      Content: '<div class="anamnesis-ortodontics report-item">\n' +
        '    <h3 class="report-item-secondary-title">Anamneza</h3>\n' +
        '    <ul class="report-item-list">\n' +
        '        <% if(anamnesis.TreatmentState) { %>\n' +
        '            <li><span class="point-name">Status tretmana:</span><span class="point-data">\n' +
        '                    <%= anamnesis.TreatmentState %>\n' +
        '                </span></li>\n' +
        '            <% } %>\n' +
        '                <% if(anamnesis.SelectedFor) { %>\n' +
        '                    <li><span class="point-name">Selected for: </span><span class="point-data">\n' +
        '                            <%= anamnesis.SelectedFor %>\n' +
        '                        </span></li>\n' +
        '                    <% } %>\n' +
        '                        <% if(anamnesis.DeviceType) { %>\n' +
        '                            <li><span class="point-name">Device type: </span><span class="point-data">\n' +
        '                                    <%= anamnesis.DeviceType %>\n' +
        '                                </span></li>\n' +
        '                            <% } %>\n' +
        '                                <% if(anamnesis.DeviceInt) { %>\n' +
        '                                    <li><span class="point-name">Device int: </span><span class="point-data">\n' +
        '                                            <%= anamnesis.DeviceInt %>\n' +
        '                                        </span></li>\n' +
        '                                    <% } %>\n' +
        '                                        <% if(anamnesis.DeviceFun) { %>\n' +
        '                                            <li><span class="point-name">Device fun: </span><span class="point-data">\n' +
        '                                                    <%= anamnesis.DeviceFun %>\n' +
        '                                                </span></li>\n' +
        '                                            <% } %>\n' +
        '                                                <% if(anamnesis.DeviceMob) { %>\n' +
        '                                                    <li><span class="point-name">Mobile device: </span><span\n' +
        '                                                            class="point-data">\n' +
        '                                                            <%= anamnesis.DeviceMob %>\n' +
        '                                                        </span></li>\n' +
        '                                                    <% } %>\n' +
        '                                                        <% if(anamnesis.DeviceFix) { %>\n' +
        '                                                            <li><span class="point-name">Fixed device: </span><span\n' +
        '                                                                    class="point-data">\n' +
        '                                                                    <%= anamnesis.DeviceFix %>\n' +
        '                                                                </span></li>\n' +
        '                                                            <% } %>\n' +
        '                                                                <% if(anamnesis.DeviceOther) { %>\n' +
        '                                                                    <li><span class="point-name">Other device:\n' +
        '                                                                        </span><span class="point-data">\n' +
        '                                                                            <%= anamnesis.DeviceOther %>\n' +
        '                                                                        </span></li>\n' +
        '                                                                    <% } %>\n' +
        '    </ul>\n' +
        '</div>',
      Style: '',
      Deleted: false,
      CustomerID: '99906837368800211'
    },
    {
      DocumentTemplateID: '99920737913013362',
      Active: true,
      Key: 'visit_partial_dentistry_anamnesis',
      Content: '<div class="anamnesis-dental report-item">\n' +
        '    <h3 class="report-item-secondary-title">Anamneza</h3>\n' +
        '    <ul class="report-item-list">\n' +
        '        <% if(anamnesis.Allergy) { %>\n' +
        '            <li><span class="point-name">Alergija:</span><span class="point-data">\n' +
        '                    <%= anamnesis.Allergy %>\n' +
        '                </span></li>\n' +
        '            <% } %>\n' +
        '                <% if(anamnesis.OtherDiseases) { %>\n' +
        '                    <li><span class="point-name">Druge bolesti:</span><span class="point-data">\n' +
        '                            <%= anamnesis.OtherDiseases %>\n' +
        '                        </span></li>\n' +
        '                    <% } %>\n' +
        '                        <% if(anamnesis.UsingMedicines) { %>\n' +
        '                            <li><span class="point-name">Trenutna terapija:</span><span class="point-data">\n' +
        '                                    <%= anamnesis.UsingMedicines %>\n' +
        '                                </span></li>\n' +
        '                            <% } %>\n' +
        '    </ul>\n' +
        '</div>',
      Style: '',
      Deleted: false,
      CustomerID: '99906837368800211'
    },
    {
      DocumentTemplateID: '99920737913013364',
      Active: true,
      Key: 'visit_partial_examination',
      Content: "<% let type; switch (examination.Type) { case 'common' : type='Osnovni pregled' ; break; case 'gyn' :\n" +
        "    type='Ginekoloski pregled' ; break; case 'usg' : type='Ultrazvucni pregled' ; break; case 'rtg' : type='RTG' ;\n" +
        "    break; case 'opt' : type='OPT' ; break; default: type='Pregled' ; break; } %>\n" +
        '    <div class="examination report-item">\n' +
        '        <h3 class="report-item-secondary-title">\n' +
        '            <%= type %>\n' +
        '        </h3>\n' +
        '        <ul class="report-item-list">\n' +
        '            <% if(examination) { %>\n' +
        '                <li><span class="point-name">Rezultat pregleda:</span><span class="point-data">\n' +
        '                        <%= examination.Fields.Result %>\n' +
        '                    </span></li>\n' +
        '                <% } %>\n' +
        '        </ul>\n' +
        '    </div>',
      Style: '',
      Deleted: false,
      CustomerID: '99906837368800211'
    },
    {
      DocumentTemplateID: '99920737913013366',
      Active: true,
      Key: 'visit_partial_diagnosis',
      Content: "<% let type; switch(diagnosis.Type) { case 'working' : type='working' ; break; case 'final' : type='final' ; break;\n" +
        "    case 'root_cause' : type='root_cause' ; break; case 'morbidity' : type='morbidity' ; break; default: type='working'\n" +
        '    ; break; } %>\n' +
        '\n' +
        '    <div class="diagnosis report-item">\n' +
        '        <ul class="report-item-list">\n' +
        '            <li><span class="point-name">\n' +
        '                    Status:</span><span class="point-data">\n' +
        '                    <%= type %>\n' +
        '                </span></li>\n' +
        '            <li><span class="point-name">\n' +
        '                    Kod:</span><span class="point-data">\n' +
        '                    <%= diagnosis.Code %>\n' +
        '                </span></li>\n' +
        '            <li><span class="point-name">\n' +
        '                    Latinski naziv:</span><span class="point-data">\n' +
        '                    <%= diagnosis.Latin %>\n' +
        '                </span></li>\n' +
        '            <li><span class="point-name">\n' +
        '                    Dijagnoza:</span>\n' +
        '                <p class="point-data">\n' +
        '                    <%= diagnosis.Dg %>\n' +
        '                </p>\n' +
        '            </li>\n' +
        '        </ul>\n' +
        '    </div>',
      Style: '',
      Deleted: false,
      CustomerID: '99906837368800211'
    },
    {
      DocumentTemplateID: '99920737913013368',
      Active: true,
      Key: 'visit_partial_treatment',
      Content: "<% let translate={ proposal: 'Predlozena terapija' , receipt: 'Recept' , dent_filling: '' , abortus: 'Abortus' ,\n" +
        "    PI1: 'Tooth position' , PI2: 'Tooth area' , PS1: 'Material' , }%>\n" +
        '    <div class="treatment report-item">\n' +
        '        <h3 class="report-item-secondary-title">\n' +
        '            <%= translate[treatment.Category] %> <span>\n' +
        "                    <%= new Date(treatment.CreatedAt).toLocaleDateString('sr-RS') %>\n" +
        '                </span>\n' +
        '        </h3>\n' +
        '        <ul class="report-item-list">\n' +
        '            <% if(treatment.Fields.Th) { %>\n' +
        '                <li><span class="point-data">\n' +
        '                        <%= treatment.Fields.Th %>\n' +
        '                    </span></li>\n' +
        '                <% } %>\n' +
        '                    <% if(treatment.PI1) { %>\n' +
        '                        <li><span class="point-name">Tooth position:</span><span class="point-data">\n' +
        '                                <%= treatment[treatment.PI1] %>\n' +
        '                            </span></li>\n' +
        '                        <% } %>\n' +
        '                            <% if(treatment.PI2) { %>\n' +
        '                                <li><span class="point-name">Tooth area:</span><span class="point-data">\n' +
        '                                        <%= treatment[treatment.PI2] %>\n' +
        '                                    </span></li>\n' +
        '                                <% } %>\n' +
        '                                    <% if(treatment.PS1) { %>\n' +
        '                                        <li><span class="point-name">Material:</span><span class="point-data">\n' +
        '                                                <%= treatment[treatment.PS1] %>\n' +
        '                                            </span></li>\n' +
        '                                        <% } %>\n' +
        '        </ul>\n' +
        '    </div>',
      Style: '',
      Deleted: false,
      CustomerID: '99906837368800211'
    }
  ],
  patient: 'John Doe',
  DOB: '1.1.1970.',
  address: ['Subotica, Glavna, 1.'],
  doctorName: 'Milos Mihic',
  doctorTitle: 'Bivsi glavni lekar',
  date: '10.8.2022.',
  anamnesisGynecology: {
    ReasonOfVisit: 'asdffasdfadsfdaassfdas',
    PreviousInterventions: 'asdf',
    Contraception: '123',
    EDD: '2023-06-05T22:00:00.000Z',
    LMP: '2022-08-29T22:00:00.000Z',
    Meses: 'asdf',
    AbortusArt: 0,
    AbortusSp: 1,
    PartusSc: 1,
    PartusVag: 1
  },
  anamnesisOrthodontics: null,
  medicalSheetDentistry: null,
  examinations: [
    {
      ExaminationID: '99920737913013136',
      Type: 'common',
      Fields: { Result: 'ASDF' },
      Deleted: false,
      VisitID: '99906837368800482'
    },
    {
      ExaminationID: '99920737913013139',
      Type: 'common',
      Fields: { Result: 'Sve smo pregledali. Nista nismo nasli.' },
      Deleted: false,
      VisitID: '99906837368800482'
    }
  ],
  diagnoses: [
    {
      DiagnosisID: '99920737913013135',
      Type: 'working',
      Code: '1B100',
      Latin: 'Manemanista',
      Dg: 'A mozda i nisi',
      Deleted: false,
      VisitID: '99906837368800482'
    },
    {
      DiagnosisID: '99920737913013138',
      Type: 'working',
      Code: '1B100',
      Latin: 'Manemanista',
      Dg: 'Zdrav si',
      Deleted: false,
      VisitID: '99906837368800482'
    }
  ],
  treatments: [
    {
      TreatmentID: '99920737913013413',
      Category: 'proposal',
      SubCategory: null,
      Fields: {
        Th: 'Sladoled 2kg/3/7 Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit perferendis vero expedita minus perspiciatis corporis aut dignissimos, numquam laborum, asperiores quas! Quis inventore nisi laboriosam pariatur dolorum sint quam accusamus ipsum autem minima! Eaque quia est, nihil error nobis deleniti enim a alias aliquid voluptates mollitia rerum? Ut, totam dignissimos natus tenetur dolorum placeat ipsum aliquam corporis vel quasi exercitationem magnam temporibus maiores nihil tempore neque incidunt ea sunt. Eos, distinctio tempora voluptate maxime nesciunt ut? Ullam, quis eligendi dolores hic fuga non reprehenderit, ea odit autem ipsum nemo modi aliquid rem necessitatibus provident consectetur corrupti. Quae id dolorem harum eligendi. Dolores, architecto. Repellendus, placeat vel. Maxime a nesciunt eum sint illum accusantium voluptates doloribus ipsam odio, laboriosam vel.'
      },
      PI1: null,
      PI2: null,
      PS1: null,
      CreatedAt: '2022-09-02T08:04:23.000Z',
      Deleted: false,
      VisitID: '99906837368800482'
    },
    {
      TreatmentID: '99920737913013414',
      Category: 'proposal',
      SubCategory: null,
      Fields: {
        Th: 'Sladoled 3kg/3/7 Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit perferendis vero expedita minus perspiciatis corporis aut dignissimos, numquam laborum, asperiores quas! Quis inventore nisi laboriosam pariatur dolorum sint quam accusamus ipsum autem minima! Eaque quia est, nihil error nobis deleniti enim a alias aliquid voluptates mollitia rerum? Ut, totam dignissimos natus tenetur dolorum placeat ipsum aliquam corporis .'
      },
      PI1: null,
      PI2: null,
      PS1: null,
      CreatedAt: '2022-09-02T08:05:00.000Z',
      Deleted: false,
      VisitID: '99906837368800482'
    }
  ],
  paths: {
    visit_partial_gynecology_anamnesis: 'C:\\Users\\yalek\\OneDrive\\Documents\\medical\\temp\\templates\\99920737913013358.html',
    visit_partial_orthodontics_anamnesis: 'C:\\Users\\yalek\\OneDrive\\Documents\\medical\\temp\\templates\\99920737913013360.html',
    visit_partial_dentistry_anamnesis: 'C:\\Users\\yalek\\OneDrive\\Documents\\medical\\temp\\templates\\99920737913013362.html',
    visit_partial_examination: 'C:\\Users\\yalek\\OneDrive\\Documents\\medical\\temp\\templates\\99920737913013364.html',
    visit_partial_diagnosis: 'C:\\Users\\yalek\\OneDrive\\Documents\\medical\\temp\\templates\\99920737913013366.html',
    visit_partial_treatment: 'C:\\Users\\yalek\\OneDrive\\Documents\\medical\\temp\\templates\\99920737913013368.html'
  }
}
