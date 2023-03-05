const usersToContact = [];

exports.getContactUs = (req, res, next) => {
    res.render('contact-us', {
        pageTitle: 'Contact Us',
        path: '/contactUs',
        activeContactUs: true,
        contactusCSS: true
    })
};

exports.getSuccess = (req, res, next) => {
    usersToContact.push({
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        date: req.body.date,
        time: req.body.time
    });
    res.render('successForm', {
        pageTitle: 'Success',
        path: '/contactUs',
        activeContactUs: true
    })
}