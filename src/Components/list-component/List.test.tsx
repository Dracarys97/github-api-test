import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import List from './List';

const elementsMock = [
  {
    "id": 2126244,
    "node_id": "MDEwOlJlcG9zaXRvcnkyMTI2MjQ0",
    "name": "bootstrap",
    "full_name": "twbs/bootstrap",
    "private": false,
    "owner": {
        "login": "twbs",
        "id": 2918581,
        "node_id": "MDEyOk9yZ2FuaXphdGlvbjI5MTg1ODE=",
        "avatar_url": "https://avatars.githubusercontent.com/u/2918581?v=4",
        "gravatar_id": "",
        "url": "https://api.github.com/users/twbs",
        "html_url": "https://github.com/twbs",
        "followers_url": "https://api.github.com/users/twbs/followers",
        "following_url": "https://api.github.com/users/twbs/following{/other_user}",
        "gists_url": "https://api.github.com/users/twbs/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/twbs/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/twbs/subscriptions",
        "organizations_url": "https://api.github.com/users/twbs/orgs",
        "repos_url": "https://api.github.com/users/twbs/repos",
        "events_url": "https://api.github.com/users/twbs/events{/privacy}",
        "received_events_url": "https://api.github.com/users/twbs/received_events",
        "type": "Organization",
        "site_admin": false
    },
    "html_url": "https://github.com/twbs/bootstrap",
    "description": "The most popular HTML, CSS, and JavaScript framework for developing responsive, mobile first projects on the web.",
    "fork": false,
    "url": "https://api.github.com/repos/twbs/bootstrap",
    "forks_url": "https://api.github.com/repos/twbs/bootstrap/forks",
    "keys_url": "https://api.github.com/repos/twbs/bootstrap/keys{/key_id}",
    "collaborators_url": "https://api.github.com/repos/twbs/bootstrap/collaborators{/collaborator}",
    "teams_url": "https://api.github.com/repos/twbs/bootstrap/teams",
    "hooks_url": "https://api.github.com/repos/twbs/bootstrap/hooks",
    "issue_events_url": "https://api.github.com/repos/twbs/bootstrap/issues/events{/number}",
    "events_url": "https://api.github.com/repos/twbs/bootstrap/events",
    "assignees_url": "https://api.github.com/repos/twbs/bootstrap/assignees{/user}",
    "branches_url": "https://api.github.com/repos/twbs/bootstrap/branches{/branch}",
    "tags_url": "https://api.github.com/repos/twbs/bootstrap/tags",
    "blobs_url": "https://api.github.com/repos/twbs/bootstrap/git/blobs{/sha}",
    "git_tags_url": "https://api.github.com/repos/twbs/bootstrap/git/tags{/sha}",
    "git_refs_url": "https://api.github.com/repos/twbs/bootstrap/git/refs{/sha}",
    "trees_url": "https://api.github.com/repos/twbs/bootstrap/git/trees{/sha}",
    "statuses_url": "https://api.github.com/repos/twbs/bootstrap/statuses/{sha}",
    "languages_url": "https://api.github.com/repos/twbs/bootstrap/languages",
    "stargazers_url": "https://api.github.com/repos/twbs/bootstrap/stargazers",
    "contributors_url": "https://api.github.com/repos/twbs/bootstrap/contributors",
    "subscribers_url": "https://api.github.com/repos/twbs/bootstrap/subscribers",
    "subscription_url": "https://api.github.com/repos/twbs/bootstrap/subscription",
    "commits_url": "https://api.github.com/repos/twbs/bootstrap/commits{/sha}",
    "git_commits_url": "https://api.github.com/repos/twbs/bootstrap/git/commits{/sha}",
    "comments_url": "https://api.github.com/repos/twbs/bootstrap/comments{/number}",
    "issue_comment_url": "https://api.github.com/repos/twbs/bootstrap/issues/comments{/number}",
    "contents_url": "https://api.github.com/repos/twbs/bootstrap/contents/{+path}",
    "compare_url": "https://api.github.com/repos/twbs/bootstrap/compare/{base}...{head}",
    "merges_url": "https://api.github.com/repos/twbs/bootstrap/merges",
    "archive_url": "https://api.github.com/repos/twbs/bootstrap/{archive_format}{/ref}",
    "downloads_url": "https://api.github.com/repos/twbs/bootstrap/downloads",
    "issues_url": "https://api.github.com/repos/twbs/bootstrap/issues{/number}",
    "pulls_url": "https://api.github.com/repos/twbs/bootstrap/pulls{/number}",
    "milestones_url": "https://api.github.com/repos/twbs/bootstrap/milestones{/number}",
    "notifications_url": "https://api.github.com/repos/twbs/bootstrap/notifications{?since,all,participating}",
    "labels_url": "https://api.github.com/repos/twbs/bootstrap/labels{/name}",
    "releases_url": "https://api.github.com/repos/twbs/bootstrap/releases{/id}",
    "deployments_url": "https://api.github.com/repos/twbs/bootstrap/deployments",
    "created_at": "2011-07-29T21:19:00Z",
    "updated_at": "2022-07-21T15:21:50Z",
    "pushed_at": "2022-07-21T15:30:02Z",
    "git_url": "git://github.com/twbs/bootstrap.git",
    "ssh_url": "git@github.com:twbs/bootstrap.git",
    "clone_url": "https://github.com/twbs/bootstrap.git",
    "svn_url": "https://github.com/twbs/bootstrap",
    "homepage": "https://getbootstrap.com",
    "size": 209508,
    "stargazers_count": 158613,
    "watchers_count": 158613,
    "language": "JavaScript",
    "has_issues": true,
    "has_projects": true,
    "has_downloads": true,
    "has_wiki": false,
    "has_pages": true,
    "forks_count": 76948,
    "mirror_url": null,
    "archived": false,
    "disabled": false,
    "open_issues_count": 374,
    "license": {
        "key": "mit",
        "name": "MIT License",
        "spdx_id": "MIT",
        "url": "https://api.github.com/licenses/mit",
        "node_id": "MDc6TGljZW5zZTEz"
    },
    "allow_forking": true,
    "is_template": false,
    "web_commit_signoff_required": false,
    "topics": [
        "bootstrap",
        "css",
        "css-framework",
        "html",
        "javascript",
        "sass",
        "scss"
    ],
    "visibility": "public",
    "forks": 76948,
    "open_issues": 374,
    "watchers": 158613,
    "default_branch": "main",
    "temp_clone_token": null,
    "organization": {
        "login": "twbs",
        "id": 2918581,
        "node_id": "MDEyOk9yZ2FuaXphdGlvbjI5MTg1ODE=",
        "avatar_url": "https://avatars.githubusercontent.com/u/2918581?v=4",
        "gravatar_id": "",
        "url": "https://api.github.com/users/twbs",
        "html_url": "https://github.com/twbs",
        "followers_url": "https://api.github.com/users/twbs/followers",
        "following_url": "https://api.github.com/users/twbs/following{/other_user}",
        "gists_url": "https://api.github.com/users/twbs/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/twbs/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/twbs/subscriptions",
        "organizations_url": "https://api.github.com/users/twbs/orgs",
        "repos_url": "https://api.github.com/users/twbs/repos",
        "events_url": "https://api.github.com/users/twbs/events{/privacy}",
        "received_events_url": "https://api.github.com/users/twbs/received_events",
        "type": "Organization",
        "site_admin": false
    },
    "network_count": 76948,
    "subscribers_count": 6892
}
]

test('renders learn react link', () => {
  render(<List repos = {elementsMock}/>);
  const name = screen.getByText('bootstrap');
  expect(name).toBeInTheDocument();
});