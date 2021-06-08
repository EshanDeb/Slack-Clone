import React from 'react'
import styled from 'styled-components'
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import CreateIcon from '@material-ui/icons/Create';
import SideBarOption from './SideBarOption'
import { auth, db } from '../firebase'
import { useCollection } from 'react-firebase-hooks/firestore'
import InsertCommentIcon from '@material-ui/icons/InsertComment';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import AppsIcon from '@material-ui/icons/Apps';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import AddIcon from '@material-ui/icons/Add';
import { useAuthState } from 'react-firebase-hooks/auth';

function SideBar() {
    const [channels] = useCollection(db.collection('rooms'));
    const [user] = useAuthState(auth);

    return (
        <SideBarContainer>
            <SideBarHeader>
                <SideBarInfo>
                    <h2>Slack</h2>
                    <h3>
                        <FiberManualRecordIcon />
                        {user.displayName.toUpperCase()}
                    </h3>
                </SideBarInfo>
                <CreateIcon />
            </SideBarHeader>
            <SideBarOption Icon={InsertCommentIcon} title="Threads" />
            <SideBarOption Icon={InboxIcon} title="Mentions & Reactions" />
            <SideBarOption Icon={DraftsIcon} title="Saved Items" />
            <SideBarOption Icon={BookmarkBorderIcon} title="Channel Browser" />
            <SideBarOption Icon={PeopleAltIcon} title="People & User Groups" />
            <SideBarOption Icon={AppsIcon} title="Apps" />
            <SideBarOption Icon={FileCopyIcon} title="File Browser" />
            <SideBarOption Icon={ExpandLessIcon} title="Show Less" />
            <hr />
            <SideBarOption Icon={AddIcon} title="Add a Channel" addChannelOption />
            {channels?.docs.map((doc) => {
                return <SideBarOption key={doc.id} id={doc.id} title={doc.data().name} />
            })}
        </SideBarContainer >
    )
}

export default SideBar

const SideBarContainer = styled.div`
    background-color: var(--slack-color);
    color: white;
    flex: 0.3;
    border-top: 1px solid #49274b;
    max-width: 250px;
    margin-top: 60px;

    >hr{
        margin-top: 10px;
        margin-bottom: 10px;
        border: 1px solid #49274b;
    }
`;

const SideBarHeader = styled.div`
    display: flex;
    border-bottom: 1px solid #49274b;
    padding: 13px;

    > .MuiSvgIcon-root{
        font-size: 18px;
        padding: 8px;
        color: #49274b;
        background-color:white;
        border-radius: 999px;
    }
`;

const SideBarInfo = styled.div`
    flex: 1;

    >h2{
        font-size:15px;
        font-weight: 900;
        margin-bottom: 5px;
    }

    >h3{
        font-size:13px;
        font-weight: 400;
        display: flex;
        align-items: center;
    }

    >h3 > .MuiSvgIcon-root{
        font-size:14px;
        margin-top:1px;
        margin-right: 2px;
        color:green
    }
`;