from ast import ListComp


def calculate_mode(info):
    dict = {}

    for i in range(0, len(info), 1):
        if info[i] not in dict:
            dict[info[i]] = {
                'value': info[i],
                'count': 1
            }
        else:
            dict[info[i]]["count"] += 1

    list_count = []
    for key in dict:
        list_count.append(dict[key]["count"])

    max_from_count = max(list_count)

    answer = []
    for key in dict:
        if dict[key]['count'] == max_from_count:
            answer.append(dict[key]['value'])
    return answer
