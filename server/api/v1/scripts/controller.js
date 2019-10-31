const KiboChatNotificationsModel = require('../kibochat/notifications/notifications.model')
const SessionsModel = require('../kibochat/sessions/sessions.model')
const SmartRepliesModel = require('../kibochat/smart_replies/smart_replies.model')
const WaitingSubscribersModel = require('../kibochat/smart_replies/waiting_sub.model')
const ChatModel = require('../kibochat/livechat/livechat.model')

const AutomationQueueModel = require('../kiboengage/automation_queue/automation_queue.model')
const AutopostingModel = require('../kiboengage/autoposting/autoposting.model')
const AutopostingMessagesModel = require('../kiboengage/autoposting_messages/autoposting_messages.model')
const AutopostingSubscriberMessagesModel = require('../kiboengage/autoposting_messages/autoposting_subscriber_messages.model')
const BroadcastsModel = require('../kiboengage/broadcasts/broadcasts.model')
const KiboEngageNotificationsModel = require('../kiboengage/notifications/notifications.model')
const PageBroadcastModel = require('../kiboengage/page_broadcast/page_broadcast.model')
const PagePollModel = require('../kiboengage/page_poll/page_poll.model')
const PageSurveyModel = require('../kiboengage/page_survey/page_survey.model')
const PageAdminSubscriptionsModel = require('../kiboengage/pageadminsubscriptions/pageadminsubscriptions.model')
const PollsModel = require('../kiboengage/polls/polls.model')
const PollResponsesModel = require('../kiboengage/polls/response.model')
const SequenceMessageQueueModel = require('../kiboengage/sequence_message_queue/seq_m_queue.model')
const SequencesModel = require('../kiboengage/sequence_messaging/sequence.model')
const SequenceMessageModel = require('../kiboengage/sequence_messaging/message.model')
const SequenceSubscriberMessagesModel = require('../kiboengage/sequence_subscribers/message.model')
const SequenceSubscribersModel = require('../kiboengage/sequence_subscribers/seq_sub.model')
const SurveyResponsesModel = require('../kiboengage/surveys/response.model')
const SurveysModel = require('../kiboengage/surveys/surveys.model')
const TagsModel = require('../kiboengage/tags/tags.model')
const TagSubscribersModel = require('../kiboengage/tags_subscriber/tags_subscriber.model')
const BotsTemplateModel = require('../kiboengage/templates/botTemplate.model')
const BroadcastsTemplateModel = require('../kiboengage/templates/broadcastTemplate.model')
const CategoryModel = require('../kiboengage/templates/category.model')
const UrlsModel = require('../kiboengage/urls/urls.model')
const async = require('async')
const config = require('./../../../config/environment/index')
const logger = require('../../../components/logger')
const TAG = '/api/v1/scripts/controller.js'
const mongoose = require('mongoose')

exports.normalizeChat = function (req, res) {
  ChatModel.find().populate('session_id').exec()
    .then(chats => {
      async.each(chats, updateChat, function (err) {
        if (err) {
          console.log(TAG, `async each error ${JSON.stringify(err)}`)
          res.status(500).json({status: 'failed', payload: err})
        } else {
          res.status(200).json({status: 'success', payload: 'updated successfully'})
        }
      })
    })
    .catch(err => {
      console.log(TAG, `fetch chat error ${JSON.stringify(err)}`)
      res.status(500).json({status: 'failed', payload: err})
    })
}

function updateChat (chat, callback) {
  if (chat.session_id) {
    ChatModel.update({_id: chat._id}, {subscriber_id: chat.session_id.subscriber_id})
      .exec().then(result => {
        callback(null)
      })
      .catch(err => {
        callback(err)
      })
  } else {
    callback(null)
  }
}

exports.normalizeKiboChat = function (req, res) {
  console.log(TAG, `normalizeKiboChat endpoint is hit:`)
  res.status(200).json({status: 'success'})

  KiboChatNotificationsModel.find({agentId: {$type: 7}, companyId: {$type: 7}})
    .then(notifications => {
      notifications.forEach(notification => {
        /* eslint-disable */
        notification.agentId = new String(notification.agentId)
        notification.companyId = new String(notification.companyId)
        /* eslint-enable */
        let notificationData = new KiboChatNotificationsModel(notification)
        notificationData.save((err, saved) => {
          if (err) console.log(TAG, `Failed to save notification ${err}`)
        })
      })
    })
    .catch(err => {
      console.log(TAG, `Failed to normalize notifications data ${err}`)
    })

  SessionsModel.find({subscriber_id: {$type: 7}, page_id: {$type: 7}})
    .then(sessions => {
      sessions.forEach(session => {
        /* eslint-disable */
        session.subscriber_id = new String(session.subscriber_id)
        session.page_id = new String(session.page_id)
        /* eslint-enable */
        let sessionData = new SessionsModel(session)
        sessionData.save((err, saved) => {
          if (err) console.log(TAG, `Failed to save session ${err}`)
        })
      })
    })
    .catch(err => {
      console.log(TAG, `Failed to normalize sessions data ${err}`)
    })

  SmartRepliesModel.find({userId: {$type: 7}})
    .then(bots => {
      bots.forEach(bot => {
        /* eslint-disable */
        bot.userId = new String(bot.userId)
        /* eslint-enable */
        let botData = new SmartRepliesModel(bot)
        botData.save((err, saved) => {
          if (err) console.log(TAG, `Failed to save bot ${err}`)
        })
      })
    })
    .catch(err => {
      console.log(TAG, `Failed to normalize bots data ${err}`)
    })

  WaitingSubscribersModel.find({subscriberId: {$type: 7}, pageId: {$type: 7}})
    .then(subscribers => {
      subscribers.forEach(subscriber => {
        /* eslint-disable */
        subscriber.subscriberId = new String(subscriber.subscriberId)
        subscriber.pageId = new String(subscriber.pageId)
        /* eslint-enable */
        let subscriberData = new WaitingSubscribersModel(subscriber)
        subscriberData.save((err, saved) => {
          if (err) console.log(TAG, `Failed to save waiting subscriber ${err}`)
        })
      })
    })
    .catch(err => {
      console.log(TAG, `Failed to normalize waiting subscribers data ${err}`)
    })
}

exports.normalizeKiboEngage = function (req, res) {
  console.log(TAG, `normalizeKiboEngage endpoint is hit:`)
  res.status(200).json({status: 'success'})

  AutomationQueueModel.find({subscriberId: {$type: 7}, companyId: {$type: 7}})
    .then(queuedData => {
      queuedData.forEach(data => {
        /* eslint-disable */
        data.subscriberId = new String(data.subscriberId)
        data.companyId = new String(data.companyId)
        /* eslint-enable */
        let automationQueueData = new AutomationQueueModel(data)
        automationQueueData.save((err, saved) => {
          if (err) console.log(TAG, `Failed to save automation queue ${err}`)
        })
      })
    })
    .catch(err => {
      console.log(TAG, `Failed to normalize automation queue data ${err}`)
    })

  AutopostingModel.find({userId: {$type: 7}, companyId: {$type: 7}})
    .then(feeds => {
      feeds.forEach(feed => {
        /* eslint-disable */
        feed.userId = new String(feed.userId)
        feed.companyId = new String(feed.companyId)
        /* eslint-enable */
        let autopostingData = new AutopostingModel(feed)
        autopostingData.save((err, saved) => {
          if (err) console.log(TAG, `Failed to save autoposting ${err}`)
        })
      })
    })
    .catch(err => {
      console.log(TAG, `Failed to normalize autoposting data ${err}`)
    })

  AutopostingMessagesModel.find({pageId: {$type: 7}, companyId: {$type: 7}})
    .then(messages => {
      messages.forEach(message => {
        /* eslint-disable */
        message.pageId = new String(message.pageId)
        message.companyId = new String(message.companyId)
        /* eslint-enable */
        let messagesData = new AutopostingMessagesModel(message)
        messagesData.save((err, saved) => {
          if (err) console.log(TAG, `Failed to save autoposting message ${err}`)
        })
      })
    })
    .catch(err => {
      console.log(TAG, `Failed to normalize autoposting messages data ${err}`)
    })

  AutopostingSubscriberMessagesModel.find({companyId: {$type: 7}})
    .then(subscriberMessages => {
      subscriberMessages.forEach(message => {
        /* eslint-disable */
        message.companyId = new String(message.companyId)
        /* eslint-enable */
        let subscriberMessagesData = new AutopostingSubscriberMessagesModel(message)
        subscriberMessagesData.save((err, saved) => {
          if (err) console.log(TAG, `Failed to save autoposting subscriber message ${err}`)
        })
      })
    })
    .catch(err => {
      console.log(TAG, `Failed to normalize autoposting subscriber messages data ${err}`)
    })

  BroadcastsModel.find({userId: {$type: 7}, companyId: {$type: 7}})
    .then(broadcasts => {
      broadcasts.forEach(broadcast => {
        /* eslint-disable */
        broadcast.userId = new String(broadcast.userId)
        broadcast.companyId = new String(broadcast.companyId)
        /* eslint-enable */
        let broadcastsData = new BroadcastsModel(broadcast)
        broadcastsData.save((err, saved) => {
          if (err) console.log(TAG, `Failed to save broadcast ${err}`)
        })
      })
    })
    .catch(err => {
      console.log(TAG, `Failed to normalize broadcasts data ${err}`)
    })

  KiboEngageNotificationsModel.find({agentId: {$type: 7}, companyId: {$type: 7}})
    .then(notifications => {
      notifications.forEach(notification => {
        /* eslint-disable */
        notification.agentId = new String(notification.agentId)
        notification.companyId = new String(notification.companyId)
        /* eslint-enable */
        let notificationData = new KiboEngageNotificationsModel(notification)
        notificationData.save((err, saved) => {
          if (err) console.log(TAG, `Failed to save notification ${err}`)
        })
      })
    })
    .catch(err => {
      console.log(TAG, `Failed to normalize notifications data ${err}`)
    })

  PageBroadcastModel.find({userId: {$type: 7}, companyId: {$type: 7}})
    .then(broadcasts => {
      broadcasts.forEach(broadcast => {
        /* eslint-disable */
        broadcast.userId = new String(broadcast.userId)
        broadcast.companyId = new String(broadcast.companyId)
        /* eslint-enable */
        let broadcastsData = new PageBroadcastModel(broadcast)
        broadcastsData.save((err, saved) => {
          if (err) console.log(TAG, `Failed to save page broadcast ${err}`)
        })
      })
    })
    .catch(err => {
      console.log(TAG, `Failed to normalize page broadcasts data ${err}`)
    })

  PagePollModel.find({userId: {$type: 7}, companyId: {$type: 7}})
    .then(polls => {
      polls.forEach(poll => {
        /* eslint-disable */
        poll.userId = new String(poll.userId)
        poll.companyId = new String(poll.companyId)
        /* eslint-enable */
        let pollsData = new PagePollModel(poll)
        pollsData.save((err, saved) => {
          if (err) console.log(TAG, `Failed to save page poll ${err}`)
        })
      })
    })
    .catch(err => {
      console.log(TAG, `Failed to normalize page polls data ${err}`)
    })

  PageSurveyModel.find({userId: {$type: 7}, companyId: {$type: 7}})
    .then(surveys => {
      surveys.forEach(survey => {
        /* eslint-disable */
        survey.userId = new String(survey.userId)
        survey.companyId = new String(survey.companyId)
        /* eslint-enable */
        let surveysData = new PageSurveyModel(survey)
        surveysData.save((err, saved) => {
          if (err) console.log(TAG, `Failed to save page survey ${err}`)
        })
      })
    })
    .catch(err => {
      console.log(TAG, `Failed to normalize page surveys data ${err}`)
    })

  PageAdminSubscriptionsModel.find({userId: {$type: 7}, companyId: {$type: 7}, pageId: {$type: 7}})
    .then(subscriptions => {
      subscriptions.forEach(subscription => {
        /* eslint-disable */
        subscription.userId = new String(subscription.userId)
        subscription.companyId = new String(subscription.companyId)
        subscription.pageId = new String(subscription.pageId)
        /* eslint-enable */
        let subscriptionsData = new PageAdminSubscriptionsModel(subscription)
        subscriptionsData.save((err, saved) => {
          if (err) console.log(TAG, `Failed to save page admin subscription ${err}`)
        })
      })
    })
    .catch(err => {
      console.log(TAG, `Failed to normalize page admin subscriptions data ${err}`)
    })

  PollsModel.find({userId: {$type: 7}, companyId: {$type: 7}})
    .then(polls => {
      polls.forEach(poll => {
        /* eslint-disable */
        poll.userId = new String(poll.userId)
        poll.companyId = new String(poll.companyId)
        /* eslint-enable */
        let pollsData = new PollsModel(poll)
        pollsData.save((err, saved) => {
          if (err) console.log(TAG, `Failed to save poll ${err}`)
        })
      })
    })
    .catch(err => {
      console.log(TAG, `Failed to normalize polls data ${err}`)
    })

  PollResponsesModel.find({subscriberId: {$type: 7}})
    .then(responses => {
      responses.forEach(response => {
        /* eslint-disable */
        response.subscriberId = new String(response.subscriberId)
        /* eslint-enable */
        let responsesData = new PollResponsesModel(response)
        responsesData.save((err, saved) => {
          if (err) console.log(TAG, `Failed to save poll response ${err}`)
        })
      })
    })
    .catch(err => {
      console.log(TAG, `Failed to normalize poll responses data ${err}`)
    })

  SequenceMessageQueueModel.find({subscriberId: {$type: 7}, companyId: {$type: 7}})
    .then(queuedMessages => {
      queuedMessages.forEach(message => {
        /* eslint-disable */
        message.subscriberId = new String(message.subscriberId)
        message.companyId = new String(message.companyId)
        /* eslint-enable */
        let queuedMessagesData = new SequenceMessageQueueModel(message)
        queuedMessagesData.save((err, saved) => {
          if (err) console.log(TAG, `Failed to save sequence message queue ${err}`)
        })
      })
    })
    .catch(err => {
      console.log(TAG, `Failed to normalize sequence messages queue data ${err}`)
    })

  SequencesModel.find({userId: {$type: 7}, companyId: {$type: 7}})
    .then(sequences => {
      sequences.forEach(sequence => {
        /* eslint-disable */
        sequence.userId = new String(sequence.userId)
        sequence.companyId = new String(sequence.companyId)
        /* eslint-enable */
        let sequencesData = new SequencesModel(sequence)
        sequencesData.save((err, saved) => {
          if (err) console.log(TAG, `Failed to save sequence ${err}`)
        })
      })
    })
    .catch(err => {
      console.log(TAG, `Failed to normalize sequences data ${err}`)
    })

  SequenceSubscriberMessagesModel.find({subscriberId: {$type: 7}, companyId: {$type: 7}})
    .then(subscriberMessages => {
      subscriberMessages.forEach(message => {
        /* eslint-disable */
        message.subscriberId = new String(message.subscriberId)
        message.companyId = new String(message.companyId)
        /* eslint-enable */
        let subscriberMessagesData = new SequenceSubscriberMessagesModel(message)
        subscriberMessagesData.save((err, saved) => {
          if (err) console.log(TAG, `Failed to save sequence subscriber message ${err}`)
        })
      })
    })
    .catch(err => {
      console.log(TAG, `Failed to normalize sequence subscriber messages data ${err}`)
    })

  SequenceSubscribersModel.find({subscriberId: {$type: 7}, companyId: {$type: 7}})
    .then(subscriberMessages => {
      subscriberMessages.forEach(message => {
        /* eslint-disable */
        message.subscriberId = new String(message.subscriberId)
        message.companyId = new String(message.companyId)
        /* eslint-enable */
        let subscriberMessagesData = new SequenceSubscribersModel(message)
        subscriberMessagesData.save((err, saved) => {
          if (err) console.log(TAG, `Failed to save sequence subscriber ${err}`)
        })
      })
    })
    .catch(err => {
      console.log(TAG, `Failed to normalize sequence subscribers data ${err}`)
    })

  SurveyResponsesModel.find({subscriberId: {$type: 7}})
    .then(responses => {
      responses.forEach(response => {
        /* eslint-disable */
        response.subscriberId = new String(response.subscriberId)
        /* eslint-enable */
        let responsesData = new SurveyResponsesModel(response)
        responsesData.save((err, saved) => {
          if (err) console.log(TAG, `Failed to save survey response ${err}`)
        })
      })
    })
    .catch(err => {
      console.log(TAG, `Failed to normalize survey responses data ${err}`)
    })

  SurveysModel.find({userId: {$type: 7}, companyId: {$type: 7}})
    .then(surveys => {
      surveys.forEach(survey => {
        /* eslint-disable */
        survey.userId = new String(survey.userId)
        survey.companyId = new String(survey.companyId)
        /* eslint-enable */
        let surveysData = new SurveysModel(survey)
        surveysData.save((err, saved) => {
          if (err) console.log(TAG, `Failed to save survey ${err}`)
        })
      })
    })
    .catch(err => {
      console.log(TAG, `Failed to normalize surveys data ${err}`)
    })

  TagsModel.find({userId: {$type: 7}, companyId: {$type: 7}})
    .then(tags => {
      tags.forEach(tag => {
        /* eslint-disable */
        tag.userId = new String(tag.userId)
        tag.companyId = new String(tag.companyId)
        /* eslint-enable */
        let tagsData = new TagsModel(tag)
        tagsData.save((err, saved) => {
          if (err) console.log(TAG, `Failed to save tag ${err}`)
        })
      })
    })
    .catch(err => {
      console.log(TAG, `Failed to normalize tags data ${err}`)
    })

  TagSubscribersModel.find({subscriberId: {$type: 7}, companyId: {$type: 7}})
    .then(tagSubscribers => {
      tagSubscribers.forEach(tagSubscriber => {
        /* eslint-disable */
        tagSubscriber.subscriberId = new String(tagSubscriber.subscriberId)
        tagSubscriber.companyId = new String(tagSubscriber.companyId)
        /* eslint-enable */
        let tagSubscribersData = new TagSubscribersModel(tagSubscriber)
        tagSubscribersData.save((err, saved) => {
          if (err) console.log(TAG, `Failed to save tag subscriber ${err}`)
        })
      })
    })
    .catch(err => {
      console.log(TAG, `Failed to normalize tag subscribers data ${err}`)
    })

  BotsTemplateModel.find({userId: {$type: 7}, companyId: {$type: 7}})
    .then(templates => {
      templates.forEach(template => {
        /* eslint-disable */
        template.userId = new String(template.userId)
        template.companyId = new String(template.companyId)
        /* eslint-enable */
        let templatesData = new BotsTemplateModel(template)
        templatesData.save((err, saved) => {
          if (err) console.log(TAG, `Failed to save bot template ${err}`)
        })
      })
    })
    .catch(err => {
      console.log(TAG, `Failed to normalize bot templates data ${err}`)
    })

  BroadcastsTemplateModel.find({userId: {$type: 7}, companyId: {$type: 7}})
    .then(templates => {
      templates.forEach(template => {
        /* eslint-disable */
        template.userId = new String(template.userId)
        template.companyId = new String(template.companyId)
        /* eslint-enable */
        let templatesData = new BroadcastsTemplateModel(template)
        templatesData.save((err, saved) => {
          if (err) console.log(TAG, `Failed to save broadcast template ${err}`)
        })
      })
    })
    .catch(err => {
      console.log(TAG, `Failed to normalize broadcast templates data ${err}`)
    })

  CategoryModel.find({userId: {$type: 7}, companyId: {$type: 7}})
    .then(categories => {
      categories.forEach(category => {
        /* eslint-disable */
        category.userId = new String(category.userId)
        category.companyId = new String(category.companyId)
        /* eslint-enable */
        let categoriesData = new CategoryModel(category)
        categoriesData.save((err, saved) => {
          if (err) console.log(TAG, `Failed to save category ${err}`)
        })
      })
    })
    .catch(err => {
      console.log(TAG, `Failed to normalize categories data ${err}`)
    })

  UrlsModel.find({subscriberId: {$type: 7}})
    .then(urls => {
      urls.forEach(url => {
        /* eslint-disable */
        url.subscriberId = new String(url.subscriberId)
        /* eslint-enable */
        let urlsData = new UrlsModel(url)
        urlsData.save((err, saved) => {
          if (err) console.log(TAG, `Failed to save url ${err}`)
        })
      })
    })
    .catch(err => {
      console.log(TAG, `Failed to normalize urls data ${err}`)
    })
}

exports.normalizeDataForDelivery = function (req, res) {
  console.log(TAG, `normalizeDataForDelivery endpoint is hit:`)
  res.status(200).json({status: 'success'})

  PageBroadcastModel.update({sent: null}, {sent: true}, {multi: true})
    .then(updated => {
      console.log('PageBroadcastModel normalized')
    })
    .catch(err => {
      console.log(`Failed to normalize PageBroadcastModel ${err}`)
    })

  PagePollModel.update({sent: null}, {sent: true}, {multi: true})
    .then(updated => {
      console.log('PagePollModel normalized')
    })
    .catch(err => {
      console.log(`Failed to normalize PagePollModel ${err}`)
    })

  PageSurveyModel.update({sent: null}, {sent: true}, {multi: true})
    .then(updated => {
      console.log('PageSurveyModel normalized')
    })
    .catch(err => {
      console.log(`Failed to normalize PageSurveyModel ${err}`)
    })
}

function updateCards (cards) {
  return new Promise(function (resolve, reject) {
    let id = ''
    cards.forEach((card, index) => {
      if (card.fileurl && card.fileurl.url) {
        id = card.fileurl.url.substring(card.fileurl.url.indexOf('download/') + 9)
        if (config.env === 'staging') {
          card.fileurl.url = `https://saccounts.cloudkibo.com/api/v1/files/download/${id}`
        } else {
          card.fileurl.url = `https://accounts.cloudkibo.com/api/v1/files/download/${id}`
        }
      }
      if (card.image_url) {
        id = card.image_url.substring(card.image_url.indexOf('download/') + 9)
        if (config.env === 'staging') {
          card.image_url = `https://saccounts.cloudkibo.com/api/v1/files/download/${id}`
        } else {
          card.image_url = `https://accounts.cloudkibo.com/api/v1/files/download/${id}`
        }
      }
      if (index === cards.length - 1) {
        resolve(cards)
      }
    })
  })
}

function updatePayload (payloads) {
  return new Promise(function (resolve, reject) {
    let id = ''
    payloads.forEach((payload, index) => {
      if (payload.componentType === 'gallery') {
        updateCards(payload.cards)
          .then(cards => {
          })
      } else {
        if (payload.fileurl && payload.fileurl.url) {
          id = payload.fileurl.url.substring(payload.fileurl.url.indexOf('download/') + 9)
          if (config.env === 'staging') {
            payload.fileurl.url = `https://saccounts.cloudkibo.com/api/v1/files/download/${id}`
          } else {
            payload.fileurl.url = `https://accounts.cloudkibo.com/api/v1/files/download/${id}`
          }
        }
        if (payload.image_url) {
          id = payload.image_url.substring(payload.image_url.indexOf('download/') + 9)
          if (config.env === 'staging') {
            payload.image_url = `https://saccounts.cloudkibo.com/api/v1/files/download/${id}`
          } else {
            payload.image_url = `https://accounts.cloudkibo.com/api/v1/files/download/${id}`
          }
        }
      }
      if (index === payloads.length - 1) {
        resolve(payloads)
      }
    })
  })
}

exports.normalizeBroadcastUrls = function (req, res) {
  BroadcastsModel.find({})
    .then(broadcasts => {
      console.log('broadcast found')
      broadcasts.forEach((broadcast, index) => {
        updatePayload(broadcast.payload)
          .then(payload => {
            console.log('payload', payload)
            BroadcastsModel.updateOne({_id: broadcast._id}, {payload: payload}).then(updated => {
              console.log('updated', updated)
            })
          })
        if (index === broadcasts.length - 1) {
          // broadcast.save((err, saved) => {
          //   if (err) console.log(TAG, `Failed to save url ${err}`)
          // })
          return res.status(200).json({status: 'success', payload: 'updated successfully'})
        }
      })
    })
}
exports.normalizeTemplateUrls = function (req, res) {
  BroadcastsTemplateModel.find({})
    .then(broadcasts => {
      console.log('broadcast found')
      broadcasts.forEach((broadcast, index) => {
        updatePayload(broadcast.payload)
          .then(payload => {
            console.log('payload', payload)
            BroadcastsTemplateModel.updateOne({_id: broadcast._id}, {payload: payload}).then(updated => {
              console.log('updated', updated)
            })
          })
        if (index === broadcasts.length - 1) {
          // broadcast.save((err, saved) => {
          //   if (err) console.log(TAG, `Failed to save url ${err}`)
          // })
          return res.status(200).json({status: 'success', payload: 'updated successfully'})
        }
      })
    })
}
exports.normalizeSequenceUrls = function (req, res) {
  SequenceMessageModel.find({})
    .then(messages => {
      console.log('broadcast found')
      messages.forEach((message, index) => {
        updatePayload(message.payload)
          .then(payload => {
            console.log('payload', payload)
            SequenceMessageModel.updateOne({_id: message._id}, {payload: payload}).then(updated => {
              console.log('updated', updated)
            })
          })
        if (index === messages.length - 1) {
          // broadcast.save((err, saved) => {
          //   if (err) console.log(TAG, `Failed to save url ${err}`)
          // })
          return res.status(200).json({status: 'success', payload: 'updated successfully'})
        }
      })
    })
}

exports.normalizeSentCount = function (req, res) {
  normalizeForBroadcasts()
  normalizeForPolls()
  normalizeForSurveys()
  return res.status(200).json({status: 'success', payload: 'Normalized successfully!'})
}

function normalizeForBroadcasts () {
  BroadcastsModel.find({}).exec()
    .then(broadcasts => {
      broadcasts.forEach(broadcast => {
        PageBroadcastModel.find({broadcastId: broadcast._id}).exec()
          .then(countData => {
            BroadcastsModel.update({_id: broadcast._id}, {sent: countData.length})
          })
          .catch(err => {
            logger.serverLog(TAG, `Filed to fetch broadcast sent count ${err}`)
          })
      })
    })
    .catch(err => {
      logger.serverLog(TAG, `Filed to fetch broadcasts ${err}`)
    })
}

function normalizeForPolls () {
  PollsModel.find({}).exec()
    .then(polls => {
      polls.forEach(poll => {
        PagePollModel.find({pollId: poll._id}).exec()
          .then(countData => {
            PollsModel.update({_id: poll._id}, {sent: countData.length})
          })
          .catch(err => {
            logger.serverLog(TAG, `Filed to fetch poll sent count ${err}`)
          })
      })
    })
    .catch(err => {
      logger.serverLog(TAG, `Filed to fetch polls ${err}`)
    })
}

function normalizeForSurveys () {
  SurveysModel.find({}).exec()
    .then(surveys => {
      surveys.forEach(survey => {
        PageSurveyModel.find({surveyId: survey._id}).exec()
          .then(countData => {
            SurveysModel.update({_id: survey._id}, {sent: countData.length})
          })
          .catch(err => {
            logger.serverLog(TAG, `Filed to fetch survey sent count ${err}`)
          })
      })
    })
    .catch(err => {
      logger.serverLog(TAG, `Filed to fetch surveys ${err}`)
    })
}

exports.normalizeActionType = function (req, res) {
  AutopostingModel.update({actionType: null}, {actionType: 'messenger'}, {multi: true}).exec()
    .then(updated => {
      return res.status(200).json({status: 'success', payload: 'Normalized successfully!'})
    })
    .catch(err => {
      logger.serverLog(TAG, `Filed to update autoposting ${err}`)
      return res.status(500).json({status: 'failed', description: err})
    })
}

exports.normalizeAutopostingDate = function (req, res) {
  AutopostingModel.update({}, {$set: {datetime: Date.now()}}, {multi: true}).exec()
    .then(updated => {
      return res.status(200).json({status: 'success', payload: 'Normalized successfully!'})
    })
    .catch(err => {
      logger.serverLog(TAG, `Filed to update Records ${err}`)
    })
}

exports.normalizeFilterAndModeration = function (req, res) {
  let updated = {
    filterTweets: false,
    moderateTweets: false
  }
  AutopostingModel.update({filterTweets: null}, updated, {multi: true}).exec()
    .then(updated => {
      return res.status(200).json({status: 'success', payload: 'Normalized successfully!'})
    })
    .catch(err => {
      logger.serverLog(TAG, `Filed to update autoposting ${err}`)
      return res.status(500).json({status: 'failed', description: err})
    })
}

exports.normalizeSequenceSubscribers = function (req, res) {
  SequenceSubscribersModel.find({}).exec()
    .then(subscribers => {
      subscribers.forEach(subscriber => {
        SequenceSubscribersModel.update({_id: subscriber._id}, {sequenceId: mongoose.Types.ObjectId(subscriber.sequenceId)}).exec()
          .then(updated => {
          })
          .catch(err => {
            logger.serverLog(TAG, `Filed to update sequence subscriber ${err}`)
          })
      })
    })
    .catch(err => {
      logger.serverLog(TAG, `Filed to fetch sequence subscriber ${err}`)
    })
  return res.status(200).json({status: 'success', payload: 'Normalized successfully!'})
}

exports.normalizeClickCount = function (req, res) {
  logger.serverLog(TAG, `normalizeClickCount ${req.body.companyId}`)
  BroadcastsModel.find(req.body.companyId ? {companyId: req.body.companyId} : {}).exec()
    .then(broadcasts => {
      logger.serverLog(TAG, `got broadcasts ${JSON.stringify(broadcasts)}`)
      let requests = []
      broadcasts.forEach(broadcast => {
        if (broadcast.clicks > broadcast.seen) {
          requests.push(BroadcastsModel.update({_id: broadcast._id}, {clicks: broadcast.seen}).exec())
        }
      })
      Promise.all(requests)
        .then(results => {
          logger.serverLog(TAG, `Updated all broadcast click counts for company ${req.body.companyId}`)
          return res.status(200).json({status: 'success', payload: results})
        })
        .catch(err => {
          logger.serverLog(TAG, `Failed to update broadcast click count ${err}`)
          return res.status(500).json({status: `failed`, description: err})
        })
    })
    .catch(err => {
      logger.serverLog(TAG, `Failed to fetch broadcasts ${err}`)
      return res.status(500).json({status: `Failed to fetch broadcasts ${err}`, description: err})
    })
}
