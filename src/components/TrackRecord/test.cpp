#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

int main() {
    int amt, nh, nhv, ns, nsv;
    cin >> amt >> nh >> nhv;

    vector<pair<int, int>> hb;
    for (int i = 0; i < nh; i++) {
        int r, p;
        cin >> r >> p;
        hb.push_back({p, r});
    }

    cin >> ns >> nsv;
    vector<pair<int, int>> sb;
    for (int i = 0; i < ns; i++) {
        int r, p;
        cin >> r >> p;
        sb.push_back({p, r});
    }

    sort(hb.begin(), hb.end());
    sort(sb.begin(), sb.end());

    int maxR = -1;
    int maxHr = -1, maxSr = -1;

    for (auto &h : hb) {
        if (h.first <= amt) {
            maxHr = max(maxHr, h.second);
        }
    }

    for (auto &s : sb) {
        if (s.first <= amt) {
            maxSr = max(maxSr, s.second);
        }
    }

    if (maxHr != -1 && maxSr != -1 && maxHr + maxSr > maxR && maxHr + maxSr <= amt) {
        maxR = maxHr + maxSr;
    }

    for (auto &h : hb) {
        for (auto &s : sb) {
            if (h.first + s.first <= amt) {
                maxR = max(maxR, h.second + s.second);
            }
        }
    }

    cout << maxR << endl;
    return 0;
}