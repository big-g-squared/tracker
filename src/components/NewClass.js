import React, { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css'
import ScheduleSelector from 'react-schedule-selector';

const NewClass = (props) => {
    const { className } = props;
    const [formState, setFormState] = useState({
        className,
        lectureHours: [],
        discussionHours: [],
        officeHours: [],
        labHours: []
    });
    return (
        <div class="pa4 black-80">
            <form class="measure center">
                <fieldset id="sign_up" class="ba b--transparent ph0 mh0">
                    <legend class="f4 fw6 ph0 mh0">New Class</legend>
                    <div class="mt4">
                        <label class="db fw6 lh-copy f6" for="email-address">Class Name</label>
                        <input class="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address"  id="email-address"/>
                    </div>
                    <div class="mt4">
                        <label class="db fw6 lh-copy f6" for="email-address">Class Schedule</label>
                        <Tabs className="mt2">
                            <TabList>
                                <Tab>Lecture</Tab>
                                <Tab>Discussion</Tab>
                                <Tab>Office Hours</Tab>
                                <Tab>Lab</Tab>
                            </TabList>

                            <TabPanel>
                                <ScheduleSelector
                                    selection={formState.lectureHours}
                                    minTime={0}
                                    hourlyChunks={2}
                                    dateFormat={'ddd'}
                                    onChange={(newSchedule) => {
                                        setFormState({
                                            ...formState,
                                            lectureHours: newSchedule
                                        })
                                    }}
                                />
                            </TabPanel>
                            <TabPanel>
                                <ScheduleSelector
                                    selection={formState.discussionHours}
                                    minTime={0}
                                    hourlyChunks={2}
                                    dateFormat={'ddd'}
                                    onChange={(newSchedule) => {
                                        setFormState({
                                            ...formState,
                                            discussionHours: newSchedule
                                        })
                                    }}
                                />
                            </TabPanel>
                            <TabPanel>
                                <ScheduleSelector
                                    selection={formState.officeHours}
                                    minTime={0}
                                    hourlyChunks={2}
                                    dateFormat={'ddd'}
                                    onChange={(newSchedule) => {
                                        setFormState({
                                            ...formState,
                                            officeHours: newSchedule
                                        })
                                    }}
                                />
                            </TabPanel>
                            <TabPanel>
                                <ScheduleSelector
                                    selection={formState.labHours}
                                    minTime={0}
                                    hourlyChunks={2}
                                    dateFormat={'ddd'}
                                    onChange={(newSchedule) => {
                                        setFormState({
                                            ...formState,
                                            officeHours: newSchedule
                                        })
                                    }}
                                />
                            </TabPanel>
                        </Tabs>
                    </div>
                </fieldset>
                <div>
                    <input class="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Add Class"/>
                </div>
                <div class="lh-copy mt3">
                    <a href="#0" class="f6 link dim black db">Sign up</a>
                    <a href="#0" class="f6 link dim black db">Forgot your password?</a>
                </div>
            </form>
        </div>
    )
}

export default NewClass