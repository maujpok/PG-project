const Feedback = require ('./../../models/Feedback');

module.exports = (customerId,professionalId) => {
  if(customerId && professionalId) return Feedback.find({customerId, professionalId})
    .populate([{path: 'customerId', select: 'id username name lastname'},
      {path: 'professionalId',select: 'id username name lastname'}])

  if(customerId) return Feedback.find({customerId}) .populate([{path: 'customerId', select: 'id username name lastname'},
    {path: 'professionalId',select: 'id username name lastname'}])

  if(professionalId) return Feedback.find({professionalId}) .populate([{path: 'customerId', select: 'id username name lastname'},
    {path: 'professionalId',select: 'id username name lastname'}])

  else return [];
}
