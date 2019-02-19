const FormInput = (props) => {
    return React.createElement('div', {className: "form-group form-check"}, 
        [
            React.createElement('label', 
                {
                    htmlFor: "ZIP"
                }, 
                "Zip code"
            ),
            React.createElement('input', 
                {
                    className: "form-control",
                    type: "code",
                    id: "1234",
                    placeholder: "1234"
                },
            ),
            React.createElement('br'),
                React.createElement('label', 
                    {
                        htmlFor: "Email"
                    }, 
                    "Email"
            ),
            React.createElement('input', 
                {
                    className: "form-control",
                    type: "email",
                    id: "PlaceholderIDEmail",
                    placeholder: "example@Example.com"
                },
            ),
            React.createElement('br'),
                React.createElement('input',
                {
                    className:"form-check",
                    type: "submit",
                    class: "btn",
                }
            )
        ]
    );
  };