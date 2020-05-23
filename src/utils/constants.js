export const emailHelp = `You can do purchases with any valid email,
but I suggest you purchase as: musala.soft@example.com
in order to see your orders when signed in.`;

export const checkoutRules = [
    {
        field: "email",
        method: "isEmail",
        validWhen: true,
        message: "Invalid email format."
    },
    {
        field: "fullname",
        method: "isEmpty",
        args: [{ ignore_whitespace: true }],
        validWhen: false,
        message: "Full name is required."
    },
    {
        field: "address",
        method: "isEmpty",
        args: [{ ignore_whitespace: true }],
        validWhen: false,
        message: "The address is required."
    },
    {
        field: "state",
        method: "isEmpty",
        args: [{ ignore_whitespace: true }],
        validWhen: false,
        message: "The state is required."
    },
    {
        field: "city",
        method: "isEmpty",
        args: [{ ignore_whitespace: true }],
        validWhen: false,
        message: "The city is required."
    },
    {
        field: "city",
        method: "isEmpty",
        args: [{ ignore_whitespace: true }],
        validWhen: false,
        message: "The city is required."
    },
    {
        field: "zip",
        method: "isPostalCode",
        args: ["BG"],
        validWhen: true,
        message: "Invalid valid zip code."
    },
    {
        field: "credit_card",
        method: "matches",
        args: [/^(\d{4}-){3}\d{4}$/],
        validWhen: true,
        message: "Invalid card number."
    },
    {
        field: "exp_month",
        method: "isInt",
        args: [{ min: 1, max: 12, allow_leading_zeroes: true }],
        validWhen: true,
        message: "Invalid month."
    },
    {
        field: "exp_year",
        method: "isInt",
        args: [{ min: new Date().getFullYear() }],
        validWhen: true,
        message: "Invalid year."
    },
    {
        field: "card_code",
        method: "matches",
        args: [/^\d{3}$/],
        validWhen: true,
        message: "Invalid card code."
    }
];

export const signinRules = [
    {
        field: "username",
        method: "isEmail",
        validWhen: true,
        message: "Invalid email format."
    },
    {
        field: "password",
        method: "isEmpty",
        validWhen: false,
        message: "The password is required."
    }
];

export const profileRules = [
    {
        field: "password",
        method: "isEmpty",
        validWhen: false,
        message: "The password is required."
    }
];
