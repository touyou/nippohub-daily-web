# NippoHub

Application for manage daily report.

Nuxt.js + Firebase

## Setup

`$ yarn install`

## Launching Develop Server
`$ nuxt`

## Build
`$ nuxt build`

## Data Structure (Fire Base)

```
- root
  - users
    - $user_id
      // Writing and reading is allowed for $user_id user.
      - daily_reports
        // Reading is allowed everybody when access_key is not empty.
        - $daily_report_id
          - title: String?
          - body: String?
          - date: String?
          - access_key: String?
          - createdAt: Integer?
  - access_keys
    // Reading is allowed for everybody. Writing is allowed when authorized(new_record), authorized and user_id is same(updating or deleting).
    - $access_key_id
      - daily_report_id: String
      - user_id: String
```
