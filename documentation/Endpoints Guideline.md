## KIBODBLAYER ENDPOINTS GUIDELINE

Every module has 5 endpoints. Their path structure, method, payload, and response are defined below:

#### To get all records

    PATH: api/v1/{module_name}/
    METHOD: GET
    RESPONSE: array of found records
    
#### To get record(s) using query

    PATH: api/v1/{module_name}/query
    METHOD: POST
    PAYLOAD: *Query Payload (Defined at the bottom)
    RESPONSE: array of found records
 
 #### To create new record
 
    PATH: api/v1/{module_name}/query
    METHOD: POST
    PAYLOAD: create payload object
    RESPONSE: array of found records
 
 #### To update record(s)

    PATH: api/v1/{module_name}/query
    METHOD: PUT
    PAYLOAD: **Update Payload (Defined at the bottom)
    RESPONSE: array of found records
 
 #### To delete record(s)

    PATH: api/v1/{module_name}/query
    METHOD: DELETE
    PAYLOAD: ***Delete Payload (Defined at the bottom)
    RESPONSE: array of found records
 
 ##### **Query Payload Structure
 
    {
      purpose: aggregate/findOne/finAll	required
	    match: {query criteria}			      required
	    group: {}	
	    skip: number,
	    sort: {criteria}
	    limit: number
	    lookup: {}
    }

##### *Update Payload Structure
 
    {
      purpose: updateOne/updateAll	required
	    match: {query criteria}		    required
	    updated: {}			              required
	    upsert: boolean			
	    multi: boolean
	    new: boolean
    }

##### ***Delete Payload Structure

    {
      purpose: deleteOne/deleteMany	required
	    match: {query criteria}		    required
    }
