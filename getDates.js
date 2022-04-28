// date vars
const today = new Date()
const yesterday = new Date(today)
const weekAgo = new Date(today)

// set dates
yesterday.setDate(yesterday.getDate() - 1)
weekAgo.setDate(weekAgo.getDate() - 7)
today.setHours(0, 0, 0, 0)
yesterday.setHours(0, 0, 0, 0)
weekAgo.setHours(0, 0, 0, 0)

// convert to ISO
today.toISOString()
yesterday.toISOString()
weekAgo.toISOString()

// set date vars
pm.environment.set("today", today);
pm.environment.set("yesterday", yesterday)
pm.environment.set("weekAgo", weekAgo);