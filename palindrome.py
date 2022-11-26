def palindrome(word):
    string = str(word).lower()
    allowed = 'abcdefghijklmnopqrstuvwxyz123456789'
    string_list = []
    for c in string:
        if c in allowed:
            string_list.append(c)
    string_2 = "".join(string_list)
    test_string = string_2[::-1]
    print(test_string)
    if test_string == string_2:
        return True
    
