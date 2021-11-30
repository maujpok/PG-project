
// export const validPassMinus = new RegExp(
//     '(?=.[a-z])'
// );
// export const validPassMayus = new RegExp(
//     '(?=.[A-Z])'
// );
// export const validPassNum = new RegExp(
//     '(?=.[0-9])'
// );
// export const validPassSimbol = new RegExp(
//     '(?=.[!@#\$%\^&\*])'
// );
// export const validPassAll = new RegExp(
//     '^(?=.[a-z])(?=.[A-Z])(?=.[0-9])(?=.[!@#\$%\^&\*])(?=.{8,})'
//     );
export const validPassLength = new RegExp(
    '(?=.{8,})'
);
    
export const validPassMedium = new RegExp(
    '^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})'
);

export const validPassHard = new RegExp(
    // eslint-disable-next-line
    '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})'
);

export const checkMail = new RegExp(
    // eslint-disable-next-line
    '/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/'
)


//new RegExp("^(?=.[a-z])(?=.[A-Z])(?=.[0-9])(?=.[!@#\$%\^&\*])(?=.{8,})");

