import os
import json
import boto3


def get_details(event, context):
    """
    Returns all project details from a DynamoDB table
    """

    try:
        # query the dynamo table
        dynamo_client = boto3.client("dynamodb")
        table_name = os.getenv("PROJECT_TABLE", None)
        items = dynamo_client.scan(TableName=table_name)
        items = flatten_result_set(items.get("Items"))


        # return the items as a json object
        response = json.dumps(
            {
                "items": items,
                "statusCode": 200,
            }
        )

    # return an error message as a JSON object if there is an error
    except:
        response = json.dumps({"message": "An error has occurred.", "statusCode": 500})

    return response
    

def flatten_result_set(result_set):
    """Flatten a dynamo resultset for returning as part of a HTTP response.
    Args:
        result_set: The result set of items returned from dynamo DB.
    Returns:
        flat_result_set: The result set flattened to remove any dynamo specific type information.
    """
    flat_result_set = []

    for row in result_set:
        flattened_row = {}

        for key in row.keys():
            value = row.get(key)

            data = list(value.values())[0]

            flattened_row[key] = data

        flat_result_set.append(flattened_row)

    return flat_result_set
