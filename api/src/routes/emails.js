const router = require("express").Router();
const transporter = require("../config/mailer");
const reader = require("../config/plantillas/index.js");
const getLinkProf = require("../config/mailHelpers/getLinkProf.js");
const { appointmentsEmail } = require('../controllers/index')

router.post("/", (req, res, next) => {
  const { type } = req.query;
  const info = req.body;

  let data = reader(type, info.username);
  let subject;
  switch (type) {
    case "welcome":
      subject = "¡Latam Exponential te da la bienvenida! - No Reply";
      break;

    case "profVerification":
      subject = "Tu usuario profesional ha sido verificado - No Reply";
      break;

    case "report":
      subject = "Reporte enviado - No Reply";
      data = data
        .replace(/{text}/gi, info.text)
        .replace(/{reportType}/gi, info.type);
      break;

    case "resetPassAdmin":
      subject = "El administrador ha reseteado tu contraseña - No Reply";

      data = data.replace(/{newPassword}/gi, info.password);
      break;

    case "resetPass":
      subject = "Solicitud de reseteo de contraseña - No Reply";

      data = data.replace(/{newPassword}/gi, info.password);
      break;
  }

  transporter
    .sendMail({
      from: "Latam Exponential <latamexp@gmail.com>",
      bcc: info.email,
      subject: subject,
      html: data,
    })
    .then((r) => res.send(r))
    .catch((r) => next(r));
});

router.post("/newAppointment", (req, res, next) => {
  const info = req.body;

  appointmentsEmail(info)
    .then(r => {
      let dataCustom = reader('reserveCustom', r.custom.username);
      let dataProf = reader('reserveProf', r.prof.username);

      const subjectCustom = "Tu consulta se ha agendado correctamente - No Reply";
      const subjectProf = "Tienes una nueva consulta agendada - No Reply";

      dataCustom = dataCustom
        .replace(/{description}/gi, r.description)
        .replace(/{numberOfSessions}/gi, r.numberOfSessions)
        .replace(/{date}/gi, r.date);

      dataProf = dataProf
        .replace(/{customUsername}/gi, r.custom.username)
        .replace(/{numberOfSessions}/gi, r.numberOfSessions)
        .replace(/{date}/gi, r.date);

      let emails = [
        { data: dataCustom, subject: subjectCustom, mail: r.custom.email },
        { data: dataProf, subject: subjectProf, mail: r.prof.email }
      ]

      emails = emails.map((d) => {
        return transporter.sendMail({
          from: "Latam Exponential <latamexp@gmail.com>",
          bcc: d.mail,
          subject: d.subject,
          html: d.data,
        });
      });

      return Promise.all([emails]);
    })
    .then(r => res.send('Enviados correctamente'))
    .catch(r => next(r))

});

module.exports = router;
