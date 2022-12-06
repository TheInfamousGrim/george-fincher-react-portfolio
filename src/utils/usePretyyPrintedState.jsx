import React, { useMemo, useState } from 'react';

export function usePrettyPrintedState() {
    const [value, setValue] = useState();
    const resultValue = useMemo(
        () =>
            React.createElement(
                React.Fragment,
                null,
                value &&
                    React.createElement(
                        'pre',
                        null,
                        'Value:',
                        React.createElement('br', null),
                        JSON.stringify(value, null, 2)
                    )
            ),
        [value]
    );
    return [resultValue, setValue];
}
