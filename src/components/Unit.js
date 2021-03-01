import React from 'react';

const Unit = (props) => {
   const { unitInfo } = props;
    return (
        <div class="outline w-25 pa3 mr2">
            <article class="center mw5 mw6-ns br3 hidden ba b--black-10 mv4">
                <h1 class="f4 bg-near-white br3 br--top black-60 mv0 pv2 ph3">{unitInfo.name}</h1>
                <div class="pa3 bt b--black-10">
                    <dl class="lh-title pa4 mt0">
                        <dt class="f6 b">Unit Type</dt>
                        <dd class="ml0">{unitInfo.type}</dd>
                        <dt class="f6 b">Unit Label</dt>
                        <dd class="ml0">{unitInfo.label}</dd>
                    </dl>
                </div>
            </article>
        </div>
    )
}

export default Unit